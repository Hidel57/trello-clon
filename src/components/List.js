import '../styles/scroll.css'
import '../styles/list.css'
import '../styles/button.css'
import '../styles/button_icon.css'
import '../styles/material_icons.css'
import Card from "./Card";

const loopTest = [
  '1', '2', '3',
  '4', '5', '6'
]

const List = () => {
  return (
    <div className="list">
      <header className="list__header">
        <h2 className="list__title">List Title</h2>
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
      <div className="list__body scroll">
        {loopTest.map(card => (
          <Card key={card} />
        ))}
        <button className="btn btn--outlined btn--full outlined-dashed">
          <span className=" btn__icon material-icons-outlined">add</span>
          Add New Task
        </button>
      </div>
    </div>
  );
}

export default List;