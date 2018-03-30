import React from 'react'
import { Card, Button, WhiteSpace } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'

import './mine.styl'

class Mine extends React.Component {

  onClickHandle = () => {
    const userTel = localStorage.getItem('USEER_TEL')
    if (userTel) {
      localStorage.removeItem('USEER_TEL')
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    const userTel = localStorage.getItem('USEER_TEL')
    return (
      <WeixinTitle title='我的' src=''>
        <div id="mine" className="main">
          <div className="mine-content">
            <div className="background">
              <section className="avatar">
                {/*<img src="http://temp.im/110x110/FF2D55/000" />*/}
                <span onClick={() => this.props.history.push('/login')}>{userTel ? userTel : '未登陆'}</span>
              </section>
            </div>
            <Card full={true}>
              <Card.Header
                title={
                  <span>
                    <img style={{ width: '0.5rem', position: 'relative', top: '0.1rem' }} src={require('./img/版本@2x.png')} alt=""/>
                    版本
                  </span>
                }
                extra='v0.8'
              />
            </Card>
            <Card full={true}>
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
            <Button onClick={this.onClickHandle} style={{ color: '#e60011' }}>{userTel ? '退出' : '登录'}</Button>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Mine