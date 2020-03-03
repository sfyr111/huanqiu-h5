import React from 'react';
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import persistState from 'redux-localstorage'

import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import App from './App'

import reducers from './reducer'
import './common/js/flexible'
import './index.styl'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(reducers, compose(
  applyMiddleware(thunk, middleware),
  persistState(),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
))

const root = document.getElementById('root')

ReactDOM.render(
  (
    <Provider store={store}>
      {/*<ConnectedRouter hashType="noslash" history={history}>*/}
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  ),
  root,
)
