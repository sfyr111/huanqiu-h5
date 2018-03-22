import React from 'react'
import { Route } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Zhitongche from '../zhitongche/zhitongche'
import Baike from '../baike/baike'
import Wuyou from '../wuyou/wuyou'
import Paimai from '../paimai/paimai'

import './product.styl'

class Product extends React.Component {
  state = {
    show: false
  }

  render() {
    const navList = [
      {
        path: '/product/zhitongche',
        component: Zhitongche
      },
      {
        path: '/product/baike',
        component: Baike
      },
      {
        path: '/product/wuyou',
        component: Wuyou
      },
      {
        path: '/product/paimai',
        component: Paimai
      }
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => v.path === pathname)

    return (
      <div id="product" className='main'>
        <div className="product-content">
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