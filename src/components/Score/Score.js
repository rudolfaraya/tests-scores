// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScoreTitle from './ScoreTitle'
import ScoreBar from './ScoreBar'

class Score extends Component {
  static propTypes = {
    score: PropTypes.object.isRequired
  }

  render() {
    const score = this.props.score

    return (
      <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
        <ScoreTitle
          name={score.es_name}
          description={score.es_description}
          tooltip={score.es_tooltip} />
        <ScoreBar
          score={score.score}
          lowLevel={score.es_low_level}
          highLevel={score.es_high_level}
          profiledScore={score.profiled_score}
          optimalScore={score.optimal_score} />
      </div>
    )
  }
}

export default Score
