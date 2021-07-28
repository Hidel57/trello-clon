import { connect } from "react-redux";
import List from "./List";

const getTasksForList = (tasks, listId) => {
  return tasks.filter(task => task.listId === listId)
}

const mapStateToProps = (state, ownProps) => ({
  tasksForList: getTasksForList(state.tasksReducer, ownProps.list.id),
  list: ownProps.list,
})

const ListContainer = connect(
  mapStateToProps
)(List)

export default ListContainer
