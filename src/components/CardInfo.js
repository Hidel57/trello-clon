import '../styles/button_icon.css'
import '../styles/modal.css'
import React from 'react';
import { connect } from 'react-redux';

const CardInfo = (props) => {
  const { task } = props
  return (
    <div>
      <h2 className="title1">{ task.title }</h2>
      <p className="text-body">{ task.text }</p>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.taskReducer
})

export default connect(mapStateToProps)(CardInfo)
