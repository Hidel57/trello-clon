import '../styles/board.css'
import List from "./List"

const Board = () => {
  return (
    <div className="board">
      <div className="board-container">
        <div className="board__colum"><List /></div>
        <div className="board__colum"><List /></div>
        <div className="board__colum"><List /></div>
      </div>
    </div>
  );
}

export default Board;