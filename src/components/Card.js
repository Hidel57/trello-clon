import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { showModal } from '../redux/modalReducer';
import { actionReadTask } from '../redux/taskReducer';
import { actionDeleteTask } from '../redux/tasksReducer';
import '../styles/card.css'

const Card = (props) => {
  const { task, index, dispatch } = props

  const handleReadTask = id => {
    dispatch(actionReadTask(id))
    dispatch(showModal('todo'))
  }

  const handleEditTask = (id) => {
    dispatch(showModal('form'))
    dispatch(actionReadTask(id))
  }

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {provided => (
        <div className="card"
          ref={provided.innerRef}
          {... provided.draggableProps}
          {... provided.dragHandleProps}
        >
          <div className="card-container">
            <div className="card__info"
              onClick={() => handleReadTask(task.id)}
            >
              <header className="card__header">
                <h3 className="card__title">{task.title}</h3>
              </header>
              <div className="card__body">
                <p className="card__text">
                  {task.text}
                </p>
              </div>
            </div>
            <footer className="card__footer flex-end">
              <div className="icon-btn-group">
                <button
                  className="icon-btn size-24 material-icons-outlined md-16 disabled"
                  onClick={() => handleEditTask(task.id)}
                >
                  edit
                </button>
                <button
                  className="icon-btn size-24 material-icons-outlined md-16 disabled"
                  onClick={() => dispatch(actionDeleteTask(task.id))}
                >
                  delete
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default connect()(Card)

