import '../styles/button_icon.css'
import '../styles/modal.css'
import React from 'react';
import Form from './Form';
import { connect } from 'react-redux';
import { hideModal } from '../redux/modalReducer';
import CardInfo from './CardInfo';

import PropTypes from 'prop-types'

const Modal = (props) => {
  const { modal, dispatch } = props
  return (
    <div className="overlay"
      style={modal.showModal ? { display: 'block' } : {}}
    >
      <div className="modal">
        <div className="modal-container">
            {modal.typeModal === 'form' ?
              null :
              <div className="modal__close">
                <button
                  className="icon-btn material-icons-outlined dark"
                  onClick={() => dispatch(hideModal())}
                >
                  close
                </button>
              </div>
            }
          {modal.typeModal === 'form' && <Form />}
          {modal.typeModal === 'todo' && <CardInfo />}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  modal: state.modalReducer
})

Modal.propTypes = {
  modal: PropTypes.shape({
    showModal: PropTypes.bool,
    typeModal: PropTypes.string,
  })
}

export default connect(mapStateToProps)(Modal)
