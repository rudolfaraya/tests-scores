import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Score from '../Score/Score'

class CognitiveCompetencies extends Component {
  static propTypes = {
    scores: PropTypes.array.isRequired
  }
  render() {
    const scores = this.props.scores
    return (
      <div aria-labelledby='headingCognitiveSkills' className='collapse show' id='collapseCognitiveSkills'>
        <div className='list-group list-group-flush d-flex flex-row flex-wrap border-0'>
          {scores.map((score) =>
            <Score score={score} key={score.id} />
          )}
        </div>
      </div>
    )
  }
}

export default CognitiveCompetencies
