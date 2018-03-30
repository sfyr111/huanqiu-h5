import React from 'react'
import { Tabs, WingBlank, WhiteSpace, List, InputItem, Button, Icon, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { WeixinTitle } from 'react-weixin-title'
import api from '../../common/api/service'


import './forget.styl'

@createForm()
class Forget extends React.Component {
  constructor() {
    console.log(process.env.NODE_ENV === 'development' ? 'http://localhost:7001/test/upload' : 'http://115.28.10.222:7001/test/upload')
    super()
    this.state = {
      time: 180,
    }
  }

  resetPassword = () => {
    const value = { ...this.props.form.getFieldsValue() }
    api.post('/do_reset_pwd.htm', value).then(res => {
      if (res.success) {
        Toast.success('修改密码成功', 1)
        this.props.history.replace('/login')
      }
      else Toast.fail(res.message, 1)
    })
  }

  getCode = () => {
    api.get('/yzm.htm', {
      ts: '1522432894076',
      tel: this.props.form.getFieldValue('tel'),
      type: 'reset'
    }).then(res => {
      if (res.success) this.setTime()
      else Toast.fail(res.message, 1)
    })
  }

  setTime = () => {
    if (this.state.time === 0) {
      this.setState({ time: 180})
    } else {
      this.setState({ time: --this.state.time })
      setTimeout(this.setTime, 1000)
    }
  }

  render() {
    const tabs = [
      { title: <span>忘记密码</span> },
    ]

    const { getFieldProps } = this.props.form
    return (
      <WeixinTitle title='忘记密码' src=''>
        <div id="forget">
          <div className="forget-content" style={{ backgroundColor: '#fff', height: '100vh' }}>
            <section className="form">
              <WingBlank>
                <WingBlank>
                  <Tabs
                    tabs={tabs}
                    tabBarActiveTextColor='#f3b439'
                    tabBarUnderlineStyle={{ border: '0.02667rem #f3b439 solid' }}
                  >
                    <section>
                      <WhiteSpace size='xl' />
                      <List>
                        <InputItem
                          {...getFieldProps('loginName')}
                          placeholder="输入用户名"
                        >
                          <img src={require('./img/用户名@2x.png')} alt="" />
                        </InputItem>
                        <InputItem
                          {...getFieldProps('tel')}
                          placeholder="输入手机号"
                        >
                          <img src={require('./img/手机号@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('yzm')}
                          placeholder="输入验证码"
                        >
                          <img src={require('./img/验证码@2x.png')} alt=""/>
                          {this.state.time === 180 ? <Button style={{ position: 'absolute', right: 0, top: '0.16rem', color: '#f3b439' }} size='small' onClick={this.getCode}>获取验证码</Button> : <Button style={{ position: 'absolute', right: 0, top: '0.16rem', color: '#f3b439' }} size='small'>{this.state.time}S后再试</Button> }
                        </InputItem>
                        <InputItem
                          {...getFieldProps('password')}
                          placeholder="输入密码"
                        >
                          <img src={require('./img/密码1@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('password2')}
                          placeholder="确认密码"
                        >
                          <img src={require('./img/确认密码@2x.png')} alt=""/>
                        </InputItem>
                      </List>
                      <WhiteSpace size='xl' />
                      <WhiteSpace size='xl' />
                      <Button onClick={this.resetPassword} style={{ borderRadius: '50px', color: '#fff', backgroundColor: '#ffda7a' }}>修改密码</Button>
                    </section>
                  </Tabs>
                </WingBlank>
              </WingBlank>
            </section>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Forget