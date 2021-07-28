import { combineReducers } from "redux";
import listsReducer from './listsReducer'
import tasksReducer from './tasksReducer'
import taskReducer from './taskReducer'
import modalReducer from './modalReducer'
const rootReducer = combineReducers({
  listsReducer,
  tasksReducer,
  taskReducer,
  modalReducer
})

export default rootReducer