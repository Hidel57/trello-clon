import '../styles/text_field.css'
import '../styles/button.css'
import { useState } from "react"

const Form = () => {
    const [formValues, setformValues] = useState({
    id: "",
    title: "",
    text: "",
  })

  const hanldeSubmit = e => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setformValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form
      onSubmit={hanldeSubmit}
    >
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
      <button className="btn btn--refilled btn--full">Text Button</button>
    </form>
  );
}

export default Form;