// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import CompletedInfo from './TestNumber/CompletedInfo'
import Profile from './Profile/Profile'

class Header extends Component {
  static propTypes = {
    mainData: PropTypes.object.isRequired
  }

  render() {
    const mainData = this.props.mainData

    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='card bg-light mb-4'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-8'>
                  <h2 className='h4'>
                    <small className='text-muted d-block'>
                      <span className='mr-2'>{mainData.process_name}&nbsp;|</span>
                      Resultados &amp; Puntajes
                    </small>
                    {mainData.first_name} {mainData.last_name}
                    <small className='d-block'>{mainData.email}</small>
                  </h2>
                  <span className='badge badge-success'>
                    <i className='fas mr-1' />Estado: {mainData.es_status}
                  </span>
                </div>
                <Profile profileName={mainData.profile_name} profileId={mainData.profile_id} />
                <div className='col-md-2 pl-md-0 col-6 text-right'>
                  <span className='badge rounded-lg total-score text-center p-3 my-2 mx-auto badge-secondary'>
                    <h2 className='h3 mb-0 font-weight-bold'>{mainData.main_score}%</h2>
                    <small>Puntaje Total</small>
                  </span>
                  <CompletedInfo
                    testsCompleted={mainData.count_rendered}
                    testsTotal={mainData.count_total}
                  />
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
