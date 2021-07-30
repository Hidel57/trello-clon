  
import { readTask } from '../services'

/*
* ACTION TYPES
*/

const ADD_LIST_ID = 'ADD_LIST_ID'
const READ_TASK = 'READ_TASK'
const CLEAR_TASK = 'CLEAR_TASK'

/*
* REDUCER
*/
const taskData = {
  id: '',
  title: '',
  text: '',
  listId: ''
}

const taskReducer = (state = taskData, action) => {
  switch (action.type) {
    case ADD_LIST_ID:
      return {
        ...state,
        listId: action.listId
      }
    case READ_TASK:
      const data = readTask(action.id, action.listId)
      return {
        id: data.id,
        title: data.title,
        text: data.text,
        listId: action.listId
      }
    case CLEAR_TASK:
      return {
          id: '',
          title: '',
          text: '',
          listId: ''
        }
    default: return state
  } 
}

/*
* ACTIONS
*/

export const addListId = listId => ({ type: ADD_LIST_ID, listId })
export const actionReadTask = (id, listId) => ({
  type: READ_TASK, id, listId
})
export const actionClearTask = () => ({ type: CLEAR_TASK })

export default taskReducer
