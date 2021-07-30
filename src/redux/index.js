import { combineReducers } from "redux";
import listsReducer from './listsReducer'
import taskReducer from './taskReducer'
import modalReducer from './modalReducer'
const rootReducer = combineReducers({
  listsReducer,
  taskReducer,
  modalReducer
})

export default rootReducer