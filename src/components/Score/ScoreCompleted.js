// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileScore from '../Profile/ProfileScore'

class ScoreCompleted extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    lowLevel: PropTypes.string.isRequired,
    highLevel: PropTypes.string.isRequired
  }

  render() {
    const {score, lowLevel, highLevel} = this.props
    // eslint-disable-next-line react/prop-types
    const {profiledScore, optimalScore} = this.props
    const roundedScore = Math.round(score)

    if (optimalScore && profiledScore) {
      return (
        <div className='d-block relative-item'>
          <ProfileScore profiledScore={profiledScore} optimalScore={optimalScore} />
          <div className='progress mb-1'>
            <div aria-valuemax='100' aria-valuemin='0' aria-valuenow={score}
              className='progress-bar progress-bar-striped bg-info' role='progressbar'
              style={{ maxWidth: roundedScore + '%' }}>
              <span className='text-left ml-2 font-weight-bold text-shadow'>{roundedScore}%</span>
            </div>
          </div>
          <div className='d-flex justify-content-between text-muted'>
            <small className='text-left'>{lowLevel}</small>
            <small className='text-right'>{highLevel}</small>
          </div>
        </div>
      )
    }
    return (
      <div className='d-block relative-item'>
        <div className='progress mb-1'>
          <div aria-valuemax='100' aria-valuemin='0' aria-valuenow={score}
            className='progress-bar progress-bar-striped bg-info' role='progressbar'
            style={{ maxWidth: roundedScore + '%' }}>
            <span className='text-left ml-2 font-weight-bold text-shadow'>{roundedScore}%</span>
          </div>
        </div>
        <div className='d-flex justify-content-between text-muted'>
          <small className='text-left'>{lowLevel}</small>
          <small className='text-right'>{highLevel}</small>
        </div>
      </div>
    )
  }
}

export default ScoreCompleted
