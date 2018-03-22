import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import Test from '../../container/test/test'

import Job from '../job/job'
import Mine from '../mine/mine'
import Product from '../product/product'
import Advisory from '../advisory/advisory'
import NavList from '../navList/navList'

import './dashboard.styl'

class Dashboard extends React.Component {

  render() {
    const navList = [
      {
        path: '/product',
        text: '产品',
        icon: 'product',
        i: 'boss',
        component: Product
      },
      {
        path: '/advisory',
        text: '咨询',
        icon: 'advisory',
        i: 'msg',
        component: Advisory
      },
      {
        path: '/job',
        text: '招聘',
        icon: 'job',
        i: 'job',
        component: Job
      },
      {
        path: '/mine',
        text: '我的',
        icon: 'mine',
        i: 'user',
        component: Mine
      }
    ]

    const { pathname } = this.props.location
    const page = navList.find(item => item.path === pathname)

    return (
      <div id='dashboard'>
        <NavBar mode="light">{page ? page.text : ''}</NavBar>
        <Route path="/" render={() => <Redirect to="/product" />} exact key="/" />
        {navList.map(item => <Route key={item.path} path={item.path} component={item.component} />)}
        <Route key='/test' path='/test' component={Test} />
        <NavList data={navList}></NavList>
      </div>
    )
  }
}

export default Dashboard
