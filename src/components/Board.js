import '../styles/board.css'
import { connect } from 'react-redux';
import ListContainer from './ListContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import { actionMoveTask } from '../redux/tasksReducer';

const Board = (props) => {
  const { lists, dispatch } = props

  const onDragEnd = (results) => {
    const { source, destination, draggableId, droppableId } = results
    if (!destination) return
    if (source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      dispatch(actionMoveTask(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        droppableId
      ))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        <div className="board-container">
          {lists.map(list => (
            <div key={list.id} className="board__colum">
              <ListContainer list={list} />
            </div>
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  lists: state.listsReducer
})

export default connect(mapStateToProps)(Board);
