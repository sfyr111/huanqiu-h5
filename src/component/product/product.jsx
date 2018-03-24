import React from 'react'
import { Route } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Wiki from '../wiki/wiki'
import Free from '../free/free'
import Auction from '../auction/auction'
import Operation from '../operation/operation'
import Union from '../union/union'
import Plan from '../plan/plan'

import './product.styl'

class Product extends React.Component {
  state = {
    show: false
  }

  render() {
    const navList = [
      {
        path: '/product/wiki',
        component: Wiki
      },
      {
        path: '/product/free',
        component: Free
      },
      {
        path: '/product/auction',
        component: Auction
      },
      {
        path: '/product/operation',
        component: Operation
      },
      {
        path: '/product/union',
        component: Union
      },
      {
        path: '/product/plan',
        component: Plan
      }
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => v.path === pathname)

    return (
      <div id="product" className='main'>
        <div className="product-content">
          <div className="background"></div>
          <ul className="product-list">
            {navList.map(item => (
              <li onClick={() => this.props.history.push(item.path)}>
                <div></div>
              </li>
            ))}
          </ul>
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