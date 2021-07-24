import '../styles/button_icon.css'
import '../styles/modal.css'
import React from 'react';
import Form from './Form';
import CardInfo from './CardInfo';

const Modal = () => {
  return (
    <div className="overlay"
      // style={show ? { display: 'block' } : {}}
    >
      <div className="modal">
        <div className="modal-container">
          <div className="modal__close">
            <button
              className="icon-btn material-icons-outlined"
              // onClick={() => setshow(false)}
            >
              close
            </button>
          </div>
          <header className="modal__header">
            <h2 className="modal__title">Modal Title</h2>
          </header>
          {/* <CardInfo /> */}
          <Form />
        </div>
      </div>
    </div>
  )
}
export default Modal
