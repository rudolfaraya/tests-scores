import React, { Component } from 'react'

import CognitiveTitle from './CognitiveTitle'
import CognitiveCompetencies from './CognitiveCompetencies'

class CognitiveCard extends Component {
  render() {
    return (
      <div className='card cognitive-results mb-3'>
        <CognitiveTitle />
        <CognitiveCompetencies />
      </div>
    )
  }
}

export default CognitiveCard
