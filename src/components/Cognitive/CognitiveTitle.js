// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'

import CompletedInfo from '../TestNumber/CompletedInfo'

class CognitiveTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }

  render() {
    const {title,
      description,
      score,
      testsCompleted,
      testsTotal} = this.props

    const iconBrain = <FontAwesomeIcon icon={faBrain} />

    return (
      <div className='card-header __with_collapsible-icons' id='headingCognitiveSkills'>
        <button aria-controls='collapseCognitiveSkills' aria-expanded='true'
          className='btn btn-link no-underline p-0 d-block text-left text-dark w-100'
          data-target='#collapseCognitiveSkills' data-toggle='collapse' type='button'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-10 col-sm-8'>
              <div className='d-inline-block w-100 d-flex align-items-center my-1'>
                <i className='fas fa-pull-left h4 mb-0'>{iconBrain}</i>
                <h3 className='h4 mb-0 d-inline-block'>{title}</h3>
              </div>
              <p className='small text-muted mb-0 pr-2 pr-sm-0'>{description}</p>
            </div>
            <div className='col-lg-2 col-sm-4'>
              <span className='badge badge-pill big-badge text-center d-flex align-items-center justify-content-center p-2 my-2 ml-auto mx-md-auto badge-primary'
                data-placement='top' data-toggle='tooltip' title=''
                data-original-title='Puntaje Cognitivo'>
                <span className='h6 font-weight-bold mb-0'>
                  {score}%
                </span>
              </span>
              <CompletedInfo
                testsCompleted={testsCompleted}
                testsTotal={testsTotal}
              />
            </div>
          </div>
        </button>
      </div>
    )
  }
}

export default CognitiveTitle
