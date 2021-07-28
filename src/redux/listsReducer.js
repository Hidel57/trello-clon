const initialState = [
  { id: 543553, title: 'To do', tasks: [] },
  { id: 543554, title: 'In progress', tasks: [] },
  { id: 543555, title: 'Complete', tasks: [] }
]
const listsReducer = (state=initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default listsReducer
