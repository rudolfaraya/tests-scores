// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import CompletedInfo from './CompletedInfo'

class Header extends Component {
  static propTypes = {
    personal_data: PropTypes.object.isRequired
  }

  render() {
    console.log(this.props.personal_data)

    const personalData = this.props.personal_data

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card bg-light mb-4'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='h4'>
                    <small className='text-muted d-block'>
                      <span className='mr-2'>{personalData.process_name}&nbsp;|</span>
                      Resultados &amp; Puntajes
                    </small>
                    {personalData.first_name} {personalData.last_name}
                    <small className='d-block'>{personalData.email}</small>
                  </h2>
                  <span className='badge badge-success'>
                    <i className='fas mr-1' />Estado: {personalData.status}
                  </span>
                </div>
                <div className='col-md-2 col-6 text-right'>
                  <span className='badge rounded-lg total-score text-center p-3 my-2 mx-auto text-wrap badge-light border border-dark text-muted'>
                    <p className='mb-0'>Perfil</p>
                    <i className='fas fa-user fa-3x my-2 d-block' />
                    <small>{personalData.profile_name}</small>
                  </span>
                </div>
                <div className='col-md-2 pl-md-0 col-6 text-right'>
                  <span className='badge rounded-lg total-score text-center p-3 my-2 mx-auto badge-secondary'>
                    <h2 className='h3 mb-0 font-weight-bold'>{personalData.results.main_score}%</h2>
                    <small>Puntaje Total</small>
                  </span>
                  <CompletedInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
