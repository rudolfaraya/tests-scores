// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProfileScore extends Component {
  static propTypes = {
    profiledScore: PropTypes.number.isRequired,
    optimalScore: PropTypes.number.isRequired
  }
  render() {
    const {profiledScore, optimalScore} = this.props
    const optimalScoreRounded = Math.round(optimalScore)
    const profiledScoreRounded = Math.round(profiledScore)

    return (
      <div className='indicator' style={{ left: optimalScoreRounded + '%' }}>
        <button className='button btn btn-link p-0 border-0 text-primary'
          data-placement='top' data-toggle='tooltip'
          title='' data-html='true' type='button'
          data-original-title={'Porcentaje Óptimo ' + optimalScoreRounded + '%' +
          '<br/> Porcentaje Logrado ' + profiledScoreRounded + '%'}>
          <i className='fas fa-user-circle text-primary' />
        </button>
      </div>
    )
  }
}

export default ProfileScore
