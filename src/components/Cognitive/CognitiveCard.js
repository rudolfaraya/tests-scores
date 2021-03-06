// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import CognitiveTitle from './CognitiveTitle'
import CognitiveCompetencies from './CognitiveCompetencies'

class CognitiveCard extends Component {
  static propTypes = {
    cognitiveDataMain: PropTypes.object.isRequired,
    cognitiveDataScores: PropTypes.array.isRequired
  }

  render() {
    const {
      cognitiveDataMain,
      cognitiveDataScores
    } = this.props

    return (
      <div className='card cognitive-results mb-3'>
        <CognitiveTitle
          title={cognitiveDataMain.title}
          description={cognitiveDataMain.description}
          score={cognitiveDataMain.cognitive_score}
          testsCompleted={cognitiveDataMain.count_rendered}
          testsTotal={cognitiveDataMain.count_total}
        />
        <CognitiveCompetencies
          scores={cognitiveDataScores}
        />
      </div>
    )
  }
}

export default CognitiveCard
