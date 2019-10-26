import React, { Component } from 'react'
import Score from '../Score/Score'
import PropTypes from 'prop-types'

class PersonalityCompetencies extends Component {
  static propTypes = {
    scores: PropTypes.array.isRequired
  }
  render() {
    const scores = this.props.scores

    return (
      <div aria-labelledby='headingPersonalityTrait' className='collapse show' id='collapsePersonalityTrait'>
        <div className='list-group list-group-flush d-flex flex-row flex-wrap border-0'>
          {scores.map((score) =>
            <Score score={score} key={score.id} />
          )}
        </div>
      </div>
    )
  }
}

export default PersonalityCompetencies
