// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Header from './components/Header'
import CognitiveCard from './components/Cognitive/CognitiveCard'
import PersonalityCard from './components/Personality/PersonalityCard'

// Assets
import 'bootstrap/dist/css/bootstrap.css'
import './scss/styles.scss'
import './scss/customs.scss'
import './scss/commons.scss'
import './scss/enrollments.scss'
import './scss/landing.scss'
import './scss/test.scss'

// Data
import sampleScores from '../src/scores/enrollment'

export default class EnrollmentScores extends Component {
  static propTypes = {
    scores: PropTypes.object.isRequired
  }

  render() {
    const scores = this.props.scores
    return (
      <div className='container'>
        <Header
          mainData={scores.main_data}
        />
        <div className='row'>
          <div className='col-md-12'>
            <CognitiveCard
              cognitiveDataMain={scores.cognitive_data.main}
              cognitiveDataScores={scores.cognitive_data.scores}
            />
            <PersonalityCard
              personalityDataMain={scores.personality_data.main}
              personalityDataScores={scores.personality_data.scores}
            />
          </div>
        </div>
      </div>
    )
  }
}
