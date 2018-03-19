import React, { Component } from 'react'
// import { Route, Redirect } from 'react-router-dom'
//
// import Test from './views/test/test'

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
          App
        </div>
      )
  }
}
export default App
