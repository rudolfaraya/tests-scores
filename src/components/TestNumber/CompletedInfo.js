// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import CompletedFinished from './CompletedFinished'
import CompletedProgress from './CompletedProgress'

class CompletedInfo extends Component {
  static propTypes = {
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }
  render() {
    const {testsCompleted, testsTotal} = this.props

    if (testsCompleted === testsTotal) {
      return <CompletedFinished testsCompleted={testsCompleted} testsTotal={testsTotal} />
    }
    return (
      <CompletedProgress testsCompleted={testsCompleted} testsTotal={testsTotal} />
    )
  }
}

export default CompletedInfo
