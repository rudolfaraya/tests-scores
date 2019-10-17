import React, { Component } from 'react'

class CompletedInfo extends Component {
  render() {
    return (
      <small className='text-info d-block text-right'>
        <strong>
          <i className='fas fa-spinner fa-pulse mr-1' />
          &nbsp;Completados 0 de 6
        </strong>
      </small>
    )
  }
}

export default CompletedInfo
