// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import ScoreCompleted from './ScoreCompleted'
import ScoreAwaiting from './ScoreAwaiting'

class ScoreBar extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    lowLevel: PropTypes.string.isRequired,
    highLevel: PropTypes.string.isRequired
  }

  render() {
    const {score, lowLevel, highLevel} = this.props

    if (!score) {
      return <ScoreAwaiting />
    }
    return (
      <ScoreCompleted score={score} lowLevel={lowLevel} highLevel={highLevel} />
    )
  }
}

export default ScoreBar
