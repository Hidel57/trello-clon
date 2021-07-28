/*
* ACTION TYPES
*/

const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

/*
* REDUCER
*/
const initialState = {
  showModal: false,
  typeModal: ''
}

const Modal = (state=initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        showModal: true,
        typeModal: action.typeModal
      }
    case HIDE_MODAL:
      return {
        showModal: false,
        typeModal: ''
      }
    default: return state
  }
}

export default Modal

/*
* ACTIONS
*/

export const showModal = (typeModal) => ({
  type: SHOW_MODAL,
  typeModal
})

export const hideModal = () => ({
  type: HIDE_MODAL,
})
