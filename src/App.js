import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Test from './container/test/test'
import Login from './container/login/login'
import Forget from './container/forget/forget'
import Protocol from './container/protocol/protocol'

import AuthRoute from './component/authroute/authroute'
import Dashboard from './component/dashboard/dashboard'

import './App.styl'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(err, info) {
    console.error(err, info)
    this.setState({
      hasError: true,
    })
  }

  render() {
    return this.state.hasError
      ? <h2>页面出错了</h2>
      : (
        <div>
          <AuthRoute />
          <Switch>
            <Route path='/test' component={Test} />
            <Route path='/login' component={Login} />
            <Route path='/forget' component={Forget} />
            <Route path='/protocol' component={Protocol} />
            <Route component={Dashboard} />
          </Switch>
        </div>
      )
  }
}
export default App
