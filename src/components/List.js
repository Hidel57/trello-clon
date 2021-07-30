import '../styles/scroll.css'
import '../styles/list.css'
import '../styles/button.css'
import '../styles/button_icon.css'
import '../styles/material_icons.css'
import Card from "./Card";
import { showModal } from '../redux/modalReducer'
import { addListId } from '../redux/taskReducer'
import { Droppable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'

const List = (props) => {
  console.log(props)
  const { list, dispatch } = props

  const handleAddTaskForList = listId => {
    dispatch(addListId(listId))
    dispatch(showModal('form'))
  }

  return (
    <Droppable droppableId={list.id.toString()}>
      {provided => (
        <div className="list">
          <header className="list__header">
            <h2 className="list__title">{ list.title }</h2>
            <div className="icon-btn-group">
              <button
                className="icon-btn size-28 icon-btn-radius material-icons-outlined md-20"
              >
                add
              </button>
              <button
                className="icon-btn size-28 icon-btn-radius material-icons-outlined md-20"
              >
                edit
              </button>
              <button
                className="icon-btn size-28 icon-btn-radius material-icons-outlined md-20"
              >
                delete
              </button>
            </div>
          </header>
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="list__body scroll"
          >
            {list.tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} listId={list.id} />
            ))}

            <button
              className="btn btn--outlined btn--full outlined-dashed"
              onClick={() => handleAddTaskForList(list.id)}
            >
              <span className=" btn__icon material-icons-outlined">add</span>
              Add New Task
            </button>
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default connect()(List);
