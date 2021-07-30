import '../styles/board.css'
import { connect } from 'react-redux';
import List from './List';
import { DragDropContext } from 'react-beautiful-dnd';
import { actionMoveTask } from '../redux/listsReducer';

const Board = (props) => {
  const { lists, dispatch } = props
  const onDragEnd = (results) => {
    const { source, destination, draggableId } = results
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
      ))
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board">
        <div className="board-container">
          {lists.map(list => (
            <div key={list.id} className="board__colum">
              <List list={list} />
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
