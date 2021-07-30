import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { showModal } from '../redux/modalReducer';
import { actionReadTask } from '../redux/taskReducer';
import { actionDeleteTask } from '../redux/listsReducer';
import '../styles/card.css'

import PropTypes from 'prop-types'

const Card = (props) => {
  const { task, listId, index, dispatch } = props
  const handleReadTask = (id, listId) => {
    dispatch(actionReadTask(id, listId))
    dispatch(showModal('todo'))
  }

  const handleEditTask = (id, listId) => {
    dispatch(showModal('form'))
    dispatch(actionReadTask(id, listId))
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
              onClick={() => handleReadTask(task.id, listId)}
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
                  className="icon-btn size-24 material-icons-outlined md-16 dark"
                  onClick={() => handleEditTask(task.id, listId)}
                >
                  edit
                </button>
                <button
                  className="icon-btn size-24 material-icons-outlined md-16 dark"
                  onClick={() => dispatch(actionDeleteTask(task.id, listId))}
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

Card.propTypes = {
  index: PropTypes.number,
  listId: PropTypes.string,
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  })
}

export default connect()(Card)

