import React from 'react'
import { Route } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Jinku from '../jinku/jinku'
import Jindian from '../jindian/jindian'

import './product.styl'

class Product extends React.Component {
  state = {
    show: false
  }

  render() {
    const navList = [
      {
        path: '/product/jinku',
        component: Jinku
      },
      {
        path: '/product/jindian',
        component: Jindian
      }
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => v.path === pathname)

    return (
      <div id="product">
        <div className="product-content">
          <h1>Product</h1>
          <button onClick={() => this.props.history.push('/product/jinku')}>jink</button>
          <button onClick={() => this.props.history.push('/product/jindian')}>jindian</button>
          <ReactCSSTransitionGroup
            component='div'
            transitionName="slide-to-left"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Product