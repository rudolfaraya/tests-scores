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

export default class ExampleComponent extends Component {
  render() {
    return (
      <div className='container'>
        <Header
          personal_data={scores}
        />
        <div className='row'>
          <div className='col-md-12'>
            <CognitiveCard />
            <PersonalityCard />
          </div>
        </div>
      </div>
    )
  }
}
