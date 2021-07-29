const initialState = [
  { id: 543553, title: 'To do' },
  { id: 543554, title: 'In progress' },
  { id: 543555, title: 'Complete' }
]
const listsReducer = (state=initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default listsReducer
