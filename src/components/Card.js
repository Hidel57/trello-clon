import '../styles/card.css'

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        {/* <aside className="card__aside">
        </aside> */}
        <div className="card__info">
          <header className="card__header">
            <h3 className="card__title">Card Title</h3>
          </header>
          <div className="card__body">
            <p className="card__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsam accusantium iure nostrum ducimus error maxime velit aliquam perspiciatis nihil voluptatum ex incidunt obcaecati ab fuga sunt, magni sapiente voluptas?
            </p>
          </div>
        </div>
        <footer className="card__footer flex-end">
          <div className="icon-btn-group">
            <button
              className="icon-btn size-24 material-icons-outlined md-16 disabled"
            >
              edit
            </button>
            <button
              className="icon-btn size-24 material-icons-outlined md-16 disabled"
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
 
export default Card;