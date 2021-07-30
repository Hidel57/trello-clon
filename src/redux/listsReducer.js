import { readTasks, addTask, editTask, deleteTask, changeIndexTask, changeListTask } from '../services'

/*
* ACTION TYPES
*/

const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const EDIT_TASK = 'EDIT_TASK'
const MOVE_TASK = 'MOVE_TASK'

const listsReducer = (state=readTasks(), action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.map(list => {
        if (list.id === action.listId) {
          addTask(action.task.title, action.task.text, action.listId)
          return {
            ...list,
            tasks: [...list.tasks, {
              id: Date.now(),
              title: action.task.title,
              text: action.task.text
            }]
          }
        } else {
          return list
        }
      })

    case EDIT_TASK:
      return state.map(list => {
        if (list.id === action.listId) {
          editTask(action.id, action.task.title, action.task.text, action.listId)
          const tasks = list.tasks.map(task => {
            if (task.id === action.id) return {
              ...task,
              title: action.task.title,
              text: action.task.text
            }
            else return task
          })
          return { ...list, tasks }
        } else {
          return list
        }
      })

    case DELETE_TASK:
      return state.map(list => {
        if (list.id === action.listId) {
          deleteTask(action.id, action.listId)
          return {
            ...list,
            tasks: list.tasks.filter(task => task.id !== action.id)
          }
        } else {
          return list
        }
      })

    case MOVE_TASK:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        // draggableId,
      } = action.payload
      const newState = [...state]
      // Move within the same list
      if (droppableIdStart === droppableIdEnd) {
        changeIndexTask(droppableIdStart, droppableIndexStart, droppableIndexEnd)
        const list = state.find(list => list.id === droppableIdStart)
        const task = list.tasks.splice(droppableIndexStart, 1)
        list.tasks.splice(droppableIndexEnd, 0, ...task)
      }
        
      // Move card from one list to another
      if (droppableIdStart !== droppableIdEnd) {
        changeListTask(droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd)
        const listStart = state.find(list => list.id === droppableIdStart)
        const task = listStart.tasks.splice(droppableIndexStart, 1)
        const listEnd = state.find(list => list.id === droppableIdEnd)
        listEnd.tasks.splice(droppableIndexEnd, 0, ...task)
        }
        
      return newState
    default: return state
  }
}

export default listsReducer

/*
* ACTIONS
*/

export const actionAddTask = (task, listId) => ({
  type: ADD_TASK, task, listId
})
export const actionDeleteTask = (id, listId) => ({
  type: DELETE_TASK, id, listId
})
export const actionEditTask = (id, task, listId) => ({
  type: EDIT_TASK, id, task, listId
})
export const actionMoveTask = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => ({
  type: MOVE_TASK,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  }
})
