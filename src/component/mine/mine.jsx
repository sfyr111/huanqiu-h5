import React from 'react'
import { Card, Button, WhiteSpace } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'
import { Route } from 'react-router'
import About from '../about/about'

import './mine.styl'

class Mine extends React.Component {
  state = {
    userTel: localStorage.getItem('USEER_TEL')
  }

  onClickHandle = () => {
    const userTel = localStorage.getItem('USEER_TEL')
    if (userTel) {
      localStorage.removeItem('USEER_TEL')
      this.setState({
        userTel: ''
      })
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    // const userTel = localStorage.getItem('USEER_TEL')

    const page = {
      path: '/mine/about',
      component: About
    }

    return (
      <WeixinTitle title='我的' src=''>
        <div id="mine" className="main">
          <div className="mine-content">
            <div className="background">
              <section className="avatar">
                <img src={require('./img/我的@2x.png')} alt='' width={110} />
                <span onClick={() => this.props.history.push('/login')}>{this.state.userTel ? this.state.userTel : '登录'}</span>
              </section>
            </div>
            <Card full={true}>
              {/*<Card.Header*/}
                {/*title={*/}
                  {/*<span>*/}
                    {/*<img style={{ width: '0.5rem', position: 'relative', top: '0.1rem' }} src={require('./img/版本@2x.png')} alt=""/>*/}
                    {/*版本*/}
                  {/*</span>*/}
                {/*}*/}
                {/*extra='v0.8'*/}
              {/*/>*/}
            </Card>
            <Card full={true} onClick={() => this.props.history.push(page.path)}>
              <Card.Header
                title={
                  <span>
                    <img style={{ width: '0.5rem', position: 'relative', top: '0.1rem' }} src={require('./img/关于我们@2x.png')} alt=""/>
                    关于我们
                  </span>
                }
              />
            </Card>
            <WhiteSpace />
            {this.state.userTel ? <Button onClick={this.onClickHandle} style={{ color: '#e60011' }}>退出</Button> : null}
          </div>
          <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} />
        </div>
      </WeixinTitle>
    )
  }
}

export default Mine