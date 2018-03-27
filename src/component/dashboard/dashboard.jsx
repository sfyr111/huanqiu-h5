import React from 'react'
import { Route, Redirect } from 'react-router-dom'
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
        icon: '产品',
        component: Product
      },
      {
        path: '/advisory',
        text: '资讯',
        icon: '资讯',
        component: Advisory
      },
      {
        path: '/job',
        text: '招聘',
        icon: '招聘',
        component: Job
      },
      {
        path: '/mine',
        text: '我的',
        icon: '我的',
        component: Mine
      }
    ]

    const { pathname } = this.props.location
    const page = navList.find(item => item.path === pathname)

    return (
      <div id='dashboard'>
        <Route path="/" render={() => <Redirect to="/product" />} exact key="/" />
        {navList.map(item => <Route key={item.path} path={item.path} component={item.component} />)}
        <Route key='/test' path='/test' component={Test} />
        {page ? <NavList data={navList}></NavList> : null}
      </div>
    )
  }
}

export default Dashboard
