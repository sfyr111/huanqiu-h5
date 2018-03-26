import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { WeixinTitle } from 'react-weixin-title'

import Overseas from '../overseas/overseas'
import LectureHall from '../lectureHall/lectureHall'
import GoldLibrary from '../goldLibrary/goldLibrary'
import GoldAllusion from '../goldAllusion/goldAllusion'
import PatentLibrary from '../patentLibrary/patentLibrary'

import './wiki.styl'

class Wiki extends React.Component {

  render() {
    const navList = [
      {
        path: '/product/wiki/goldLibrary', // 智金库
        component: GoldLibrary
      },
      {
        path: '/product/wiki/goldAllusion', // 智金典
        component: GoldAllusion
      },
      {
        path: '/product/wiki/overseas', // 海外案例
        component: Overseas
      },
      {
        path: '/product/wiki/patentLibrary', // 专利数据库
        component: PatentLibrary
      },
      {
        path: '/product/wiki/lectureHall', // 智金大讲堂
        component: LectureHall
      }
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => pathname.indexOf(v.path) > -1)

    return (
      <WeixinTitle title='智金百科' src=''>
        <div id="wiki" style={{ background: '#f5f5f5', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="wiki-content">
            <ul className="wiki-list">
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
              { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
            {/*</CSSTransitionGroup>*/}
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Wiki