// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScoreTitle extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired
  }

  render() {
    const {
      name,
      description,
      tooltip
    } = this.props

    return (
      <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
        <div className='d-block'>
          <h5 className='h6 font-weight-bold mb-0 mt-2'>{name}</h5>
          <p className='mb-1'>{description}</p>
        </div>
        <div className='float-right'>
          <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
            type='button'
            data-original-title={tooltip}>
            <i className='fas fa-info-circle fa-lg' />
          </button>
        </div>
      </div>
    )
  }
}

export default ScoreTitle
