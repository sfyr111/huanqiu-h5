import React from 'react'
import { Route } from 'react-router-dom'
import { WeixinTitle } from 'react-weixin-title'

import Pct from './children/pct'
import Madrid from './children/madrid'
import Power from './children/power'
import Lang from './children/lang'
import Subsidy from './children/subsidy'

import './free.styl'

class Free extends React.Component {

  render() {
    const navList = [
      {
        path: '/product/free/pct', // PCT 支援
        component: Pct
      },
      {
        path: '/product/free/madrid', // 马德里支援
        component: Madrid
      },
      {
        path: '/product/free/power', // 维权支援
        component: Power
      },
      {
        path: '/product/free/lang', // 多语支援
        component: Lang
      },
      {
        path: 'http://www.hqht-online.com/', // 跳转外链
        component: null
      },
      {
        path: '/product/free/subsidy', // 补贴申报
        component: Subsidy
      },
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => pathname.indexOf(v.path) > -1)

    return (
      <WeixinTitle title='智金无忧' src=''>
        <div id="free" style={{ background: '#f5f5f5', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="free-content">
            <ul className="free-list">
              {navList.map((item, index) => (
                <li key={index} onClick={() => item.component ? this.props.history.push(item.path) : window.location.href = item.path }>
                  <div></div>
                </li>
              ))}
            </ul>
            { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Free