// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import CognitiveTitle from './CognitiveTitle'
import CognitiveCompetencies from './CognitiveCompetencies'

class CognitiveCard extends Component {
  static propTypes = {
    cognitiveDataTitle: PropTypes.string.isRequired,
    cognitiveDataDescription: PropTypes.string.isRequired,
    cognitiveDataScores: PropTypes.array.isRequired
  }

  render() {
    const {cognitiveDataTitle, cognitiveDataDescription, cognitiveDataScores} = this.props

    return (
      <div className='card cognitive-results mb-3'>
        <CognitiveTitle
          title={{cognitiveDataTitle}}
          description={{cognitiveDataDescription}}
        />
        <CognitiveCompetencies
          scores={{cognitiveDataScores}}
        />
      </div>
    )
  }
}

export default CognitiveCard
