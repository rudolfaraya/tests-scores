// Dependencies
import React, { Component } from 'react'

// Components
import Header from './components/Header'
import CognitiveCard from './components/CognitiveCard'
import PersonalityCard from './components/PersonalityCard'

// Assets
import 'bootstrap/dist/css/bootstrap.css'
import './styles.scss'
import './customs.scss'

// Data
import scores from '../src/scores/enrollment'

export default class EnrollmentScores extends Component {
  render() {
    return (
      <div className='container'>
        <Header
          main_data={scores.main_data}
        />
        <div className='row'>
          <div className='col-md-12'>
            <CognitiveCard
              cognitiveDataTitle={scores.cognitive_data.title}
              cognitiveDataDescription={scores.cognitive_data.description}
              cognitiveDataScores={scores.cognitive_data.scores}
            />
            <PersonalityCard
              personality_data={scores.personality_data}
            />
          </div>
        </div>
      </div>
    )
  }
}
