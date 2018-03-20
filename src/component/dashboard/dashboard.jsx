import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Test from '../../container/test/test'

import Job from '../job/job'
import Mine from '../mine/mine'
import Product from '../product/product'
import Advisory from '../advisory/advisory'
import NavList from '../navList/navList'

class Dashboard extends React.Component {

  render() {
    const { pathname } = this.props.location
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
      },
    ]

    return (
      <div id='dashboard'>
        <Route path="/" render={() => <Redirect to="/product" />} exact key="/" />
        {navList.map(item => <Route key={item.path} path={item.path} component={item.component} />)}
        <NavList data={navList}></NavList>
      </div>
    )
  }
}

export default Dashboard
