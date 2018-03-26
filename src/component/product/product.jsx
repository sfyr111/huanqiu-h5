import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { WeixinTitle } from 'react-weixin-title'

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
        path: '/product/wiki', // 智金百科
        component: Wiki
      },
      {
        path: '/product/free', // 智金无忧
        component: Free
      },
      {
        path: '/product/auction', // 智金拍卖
        component: Auction
      },
      {
        path: '/product/operation', // 智金运营
        component: Operation
      },
      {
        path: '/product/union', // 智金联盟
        component: Union
      },
      {
        path: '/product/plan', // 智金策划
        component: Plan
      }
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => pathname.indexOf(v.path) > -1)

    return (
      <WeixinTitle title='产品' src=''>
        <div id="product" className='main'>
          <div className="product-content">
            <div className="background"></div>
            <ul className="product-list">
              {navList.map((item, index) => (
                <li key={index} onClick={() => this.props.history.push(item.path)}>
                  <div></div>
                </li>
              ))}
            </ul>
            {/*<CSSTransitionGroup*/}
              {/*component='div'*/}
              {/*transitionName="slide-to-left"*/}
              {/*transitionEnterTimeout={300}*/}
              {/*transitionLeaveTimeout={300}*/}
            {/*>*/}
              { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null}
            {/*</CSSTransitionGroup>*/}
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Product