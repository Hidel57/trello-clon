import '../styles/button_icon.css'
import '../styles/modal.css'
import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'

const CardInfo = (props) => {
  const { task } = props
  return (
    <div>
      <h2 className="headline2">{ task.title }</h2>
      <p className="text-body">{ task.text }</p>
    </div>
  )
}

const mapStateToProps = state => ({
  task: state.taskReducer
})

CardInfo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  })
}

export default connect(mapStateToProps)(CardInfo)
