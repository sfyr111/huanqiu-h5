import React from 'react'
import { Tabs, WingBlank, WhiteSpace, List, InputItem, Button, Radio, Toast } from 'antd-mobile'
import { createForm } from 'rc-form'
import { WeixinTitle } from 'react-weixin-title'
import api from '../../common/api/service'

import './login.styl'

@createForm()
class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      time: 180,
      nature: '1',
    }
  }

  register = () => {
    const value = { ...{ type: this.state.nature }, ...this.props.form.getFieldsValue() }
    api.post('/do_register.htm', value).then(res => {
      if (res.success) {
        Toast.success('注册成功', 1)
        window.location.reload()
      }
      else Toast.fail(res.message, 1)
    })
  }

  login = () => {
    const value = { ...{ tel: this.props.form.getFieldValue('loginTel'), password: this.props.form.getFieldValue('loginPassword') } }
    api.post('/do_login.htm', value).then(res => {
      if (res.success) {
        localStorage.setItem('USEER_TEL', value.tel)
        this.props.history.replace('/')
      }
      else Toast.fail(res.message, 1)
    })
  }

  getCode = () => {
    api.get('/yzm.htm', {
      ts: '1522432894076',
      tel: this.props.form.getFieldValue('tel'),
      type: 'reg'
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
      { title: <span>登录</span> },
      { title: <span>注册</span> }
    ]

    const { getFieldProps } = this.props.form

    const nature = (<div className='nature' style={{
      fontSize: 14,
      color: '#ccc',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between'
    }}>
      <Radio className="my-radio" onChange={() => this.setState({ nature: '1'})} checked={this.state.nature === '1'}>个人</Radio>
      <Radio className="my-radio" onChange={() => this.setState({ nature: '2'})} checked={this.state.nature === '2'}>企业</Radio>
      <Radio className="my-radio" onChange={() => this.setState({ nature: '3'})} checked={this.state.nature === '3'}>事务所</Radio>
    </div>)

    return (
      <WeixinTitle title='登录' src=''>
        <div id="login">
          <div className="login-content" style={{ backgroundColor: '#fff', height: '100vh' }}>
            <section className="form">
              <WingBlank>
                <WingBlank>
                  <Tabs
                    ref={ref => this.tabs = ref}
                    tabs={tabs}
                    page={this.state.page}
                    initialPage={0}
                    animated={false}
                    useOnPan={false}
                    tabBarActiveTextColor='#f3b439'
                    tabBarUnderlineStyle={{ border: '0.02667rem #f3b439 solid' }}
                  >
                    <section>
                      <WhiteSpace size='xl' />
                      <List>
                        <InputItem
                          {...getFieldProps('loginTel')}
                          placeholder="手机号"
                        >
                          <img src={require('./img/手机号@2x.png')} alt="" />
                        </InputItem>
                        <InputItem
                          {...getFieldProps('loginPassword')}
                          placeholder="请输入密码"
                          type='password'
                        >
                          <img src={require('./img/确认密码@2x.png')} alt=""/>
                        </InputItem>
                      </List>
                      <WhiteSpace />
                      <section onClick={() => this.props.history.push('/forget')} style={{ fontSize: '12px', color: '#888', textAlign: 'right' }}>忘记密码?</section>
                      <WhiteSpace size='xl' />
                      <WhiteSpace size='xl' />
                      <Button onClick={this.login} style={{ borderRadius: '50px', color: '#fff', backgroundColor: '#ffda7a' }}>登录</Button>
                    </section>
                    <section>
                      <WhiteSpace size='xl' />
                      <List>
                        <List.Item><span className='sex-line_label'></span>{nature}</List.Item>
                        <InputItem
                          {...getFieldProps('loginName')}
                          placeholder="输入用户名"
                        >
                          <img src={require('./img/用户名@2x.png')} alt="" />
                        </InputItem>
                        <InputItem
                          {...getFieldProps('password')}
                          placeholder="输入密码"
                          type="password"
                        >
                          <img src={require('./img/密码1@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('password2')}
                          placeholder="确认密码"
                          type="password"
                        >
                          <img src={require('./img/确认密码@2x.png')} alt=""/>
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
                          {...getFieldProps('company')}
                          placeholder="输入单位名称"
                        >
                          <img src={require('./img/单位@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('post')}
                          placeholder="输入职位"
                        >
                          <img src={require('./img/职位@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('country')}
                          placeholder="输入国籍"
                        >
                          <img src={require('./img/国际@2x.png')} alt=""/>
                        </InputItem>
                      </List>
                      <WhiteSpace size='xl' />
                      <WhiteSpace size='xl' />
                      <Button style={{ borderRadius: '50px', color: '#fff', backgroundColor: '#ffda7a' }} onClick={this.register}>注册</Button>
                      <WhiteSpace size='xl' />
                      <section style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '12px', color: '#333' }}>注册即表示同意</p>
                        <span style={{ fontSize: '12px', color: '#5fa9ff' }} onClick={() => this.props.history.push('/protocol')}>《寰球智金-紫金知识产权国际合作平台用户注册协议》</span>
                      </section>
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

export default Login