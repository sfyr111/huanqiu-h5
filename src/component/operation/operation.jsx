import React from 'react'
import { Route } from 'react-router-dom'
import { WeixinTitle } from 'react-weixin-title'
import { Toast } from 'antd-mobile'

import OperationFund from './children/operationFund'

import './operation.styl'

class Operation extends React.Component {

  onClickHandler = (item) => {
    const { path, component } = item

    if (!path.trim()) {
      Toast.info('功能开发中~', 1)
      return
    }

    if (!component) window.location.href = item.path
    else this.props.history.push(item.path)
  }

  render() {
    const navList = [
      {
        path: '/product/operation/fund', // 紫萌青少年创新发展基金
        component: OperationFund
      },
      {
        path: '', // 智通知识产权运营基金
        component: null
      },
    ]
    const { pathname } = this.props.location
    const page = navList.find(v => pathname.indexOf(v.path) > -1)

    return (
      <WeixinTitle title='智金运营' src=''>
        <div id="operation" style={{ background: '#f5f5f5', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="operation-content">
            <ul className="operation-list">
              {navList.map((item, index) => (
                <li key={index} onClick={() => this.onClickHandler(item)}>
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

export default Operation