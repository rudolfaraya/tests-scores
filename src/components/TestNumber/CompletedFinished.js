import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CompletedFinished extends Component {
  static propTypes = {
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }
  render() {
    const {testsCompleted, testsTotal} = this.props
    return (
      <small className='text-success d-block text-right'>
        <strong>
          <i className='fas fa-check mr-1' />
          &nbsp;Completados {testsCompleted} de {testsTotal}
        </strong>
      </small>
    )
  }
}

export default CompletedFinished
