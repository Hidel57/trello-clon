import { changeStateTask, readTasks } from '../services'
import { addTask } from '../services'
import { editTask } from '../services'
import { deleteTask } from '../services'

/*
* ACTION TYPES
*/

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const EDIT_TASK = 'EDIT_TASK'
const MOVE_TASK = 'MOVE_TASK'

const tasksReducer = (state=readTasks(), action) => {
  switch (action.type) {
    case ADD_TASK:
      addTask(action.task.title, action.task.text, action.task.listId)
      return [
        ...state,
        {
          id: Date.now(),
          title: action.task.title,
          text: action.task.text,
          listId: action.task.listId
        }
      ]
    case EDIT_TASK:
      editTask(action.id, action.task.title, action.task.text)
      return state.map(task =>
        task.id === action.id ?
          { ...task, title: action.task.title, text: action.task.text } :
          task
      )
    case DELETE_TASK:
      deleteTask(action.id)
      return state.filter(task => task.id !== action.id)
    case MOVE_TASK:
      const {
        droppableIdStart,
        droppableIdEnd,
        // droppableIndexStart,
        // droppableIndexEnd,
        draggableId,
        droppableId
      } = action.payload
      console.log(action.payload)
      // Move within the same list
      console.log(droppableId)
      // Move card from one list to another
      if (droppableIdStart !== droppableIdEnd) {
        changeStateTask(parseInt(draggableId), parseInt(droppableIdEnd))
        return state.map(task =>
          task.id === parseInt(draggableId) ?
            { ...task, listId: parseInt(droppableIdEnd) } :
            task
        )        
      }
      return state
    default: return state
  }
}

export default tasksReducer


/*
* ACTIONS
*/

export const actionAddTask = task => ({ type: ADD_TASK, task })
export const actionEditTask = (id, task) => ({ type: EDIT_TASK, id, task })
export const actionDeleteTask = id => ({ type: DELETE_TASK, id })
export const actionMoveTask = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  droppableId
) => ({
  type: MOVE_TASK,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    droppableId
  }
})
