import '../styles/text_field.css'
import '../styles/button.css'

import { useState } from "react"
import { connect } from 'react-redux'

import { actionAddTask, actionEditTask } from '../redux/tasksReducer'
import { actionClearTask } from '../redux/taskReducer'
import { hideModal } from '../redux/modalReducer'

const Form = (props) => {
  const { taskValues, dispatch } = props
  const [formValues, setformValues] = useState(taskValues)
  const [error, setError] = useState(null)

  const hanldeSubmit = e => {
    e.preventDefault()

    if (e.target.title.value.trim() === '') {
      setError('Complete the Title field')
      return
    }
    if (e.target.text.value.trim() === '') {
      setError('Complete the description text field')
      return
    }

    
    formValues.id === '' ?
      handleAddTask(formValues) :
      handleEditTask(formValues.id, formValues)
  }

  const handleChange = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddTask = (task) => {
    dispatch(actionAddTask(task))
    dispatch(actionClearTask())
    dispatch(hideModal())
  }

    const handleEditTask = (id, task) => {
    dispatch(actionEditTask(id, task))
    dispatch(actionClearTask())
    dispatch(hideModal())
  }

  const handleClearFormValues = () => {
    setError(null)
    dispatch(actionClearTask())
    dispatch(hideModal())
  }

  return (
    <form
      onSubmit={hanldeSubmit}
    >
      <h2 className="headline2">
        {formValues.id === '' ? 'Add Task' : 'Edit Task' }
      </h2>

      {error ? <p className="text-error">{error}</p> : null}

      <div className='text-field text-field--margin'>
        <input className='input text-field__input'
          type='text' id='title' name='title'
          onChange={handleChange}
          value={formValues.title}
        />
        <label className='text-field__label' htmlFor='title'>title</label>
      </div>

      <div className='text-field text-field--margin'>
        <textarea className='input text-field__input text-field__input--textarea'
          rows="5" id='text'
          name='text'
          onChange={handleChange}
          value={formValues.text}
        ></textarea>
        <label className='text-field__label' htmlFor='text'>text</label>
      </div>

      {formValues.id === '' ?
        <button
          className="btn btn--refilled btn--full mb-16"
        >Add New Task</button>
        :
        <button
          className="btn btn--refilled btn--full mb-16"
        >Edit Task</button>
      }

      <button
        className="btn btn--outlined btn--full mb-16"
        onClick={()=> handleClearFormValues()}
      >Cancel</button>
    </form>
  );
}

const mapStateToProps = state => ({
  taskValues: state.taskReducer
})

export default connect(mapStateToProps)(Form);
