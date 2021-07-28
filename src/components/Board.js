import '../styles/board.css'
import { connect } from 'react-redux';
import ListContainer from './ListContainer';

const Board = (props) => {
  const { lists } = props
  console.log(lists)

  return (
    <div className="board">
      <div className="board-container">
        {lists.map(list => (
          <div key={list.id} className="board__colum">
            <ListContainer list={list} />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  lists: state.listsReducer
})

export default connect(mapStateToProps)(Board);
