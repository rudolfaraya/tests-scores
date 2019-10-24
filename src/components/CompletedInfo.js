import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CompletedInfo extends Component {
  static propTypes = {
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }
  render() {
    const {testsCompleted, testsTotal} = this.props
    return (
      <small className='text-info d-block text-right'>
        <strong>
          <i className='fas fa-spinner fa-pulse mr-1' />
          &nbsp;Completados {testsCompleted} de {testsTotal}
        </strong>
      </small>
    )
  }
}

export default CompletedInfo
