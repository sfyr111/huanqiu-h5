import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

@withRouter
@connect(
  null,
  {}
)
class AuthRoute extends React.Component {
  componentDidMount () {}

  render () {
    return null
  }
}

export default AuthRoute
