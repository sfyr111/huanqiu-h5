import React from 'react'
import { Tabs, WingBlank, WhiteSpace, List, InputItem, Button, Radio } from 'antd-mobile'
import { createForm } from 'rc-form'
import { WeixinTitle } from 'react-weixin-title'

import './login.styl'

@createForm()
class Login extends React.Component {
  state = {
    nature: 'personal'
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
      <Radio className="my-radio" onChange={() => this.setState({ nature: 'personal'})} checked={this.state.nature === 'personal'}>个人</Radio>
      <Radio className="my-radio" onChange={() => this.setState({ nature: 'company'})} checked={this.state.nature === 'company'}>企业</Radio>
      <Radio className="my-radio" onChange={() => this.setState({ nature: 'office'})} checked={this.state.nature === 'office'}>事务所</Radio>
    </div>)

    return (
      <WeixinTitle title='登录' src=''>
        <div id="login">
          <div className="login-content" style={{ backgroundColor: '#fff', height: '100vh' }}>
            <section className="form">
              <WingBlank>
                <WingBlank>
                  <Tabs
                    tabs={tabs}
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
                          {...getFieldProps('username')}
                          placeholder="请输入用户名"
                        >
                          <img src={require('./img/用户名@2x.png')} alt="" />
                        </InputItem>
                        <InputItem
                          {...getFieldProps('password')}
                          placeholder="请输入密码(6-20位)"
                        >
                          <img src={require('./img/确认密码@2x.png')} alt=""/>
                        </InputItem>
                      </List>
                      <WhiteSpace />
                      <section onClick={() => this.props.history.push('/forget')} style={{ fontSize: '12px', color: '#888', textAlign: 'right' }}>忘记密码?</section>
                      <WhiteSpace size='xl' />
                      <WhiteSpace size='xl' />
                      <Button style={{ borderRadius: '50px', color: '#fff', backgroundColor: '#ffda7a' }}>登录</Button>
                    </section>
                    <section>
                      <WhiteSpace size='xl' />
                      <List>
                        <List.Item><span className='sex-line_label'></span>{nature}</List.Item>
                        <InputItem
                          {...getFieldProps('regUsername')}
                          placeholder="输入用户名"
                        >
                          <img src={require('./img/用户名@2x.png')} alt="" />
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regPassword')}
                          placeholder="输入密码(6-20位)"
                        >
                          <img src={require('./img/密码1@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regVerifyPassword')}
                          placeholder="确认密码(6-20位)"
                        >
                          <img src={require('./img/确认密码@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regPhone')}
                          placeholder="输入手机号"
                        >
                          <img src={require('./img/手机号@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regVerifyCode')}
                          placeholder="输入验证码"
                        >
                          <img src={require('./img/验证码@2x.png')} alt=""/>
                          <Button style={{ position: 'absolute', right: 0, top: '0.16rem', color: '#f3b439' }} size='small'>获取验证码</Button>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regCompany')}
                          placeholder="输入单位名称"
                        >
                          <img src={require('./img/单位@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regJob')}
                          placeholder="输入职位"
                        >
                          <img src={require('./img/职位@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('regCountry')}
                          placeholder="输入国籍"
                        >
                          <img src={require('./img/国际@2x.png')} alt=""/>
                        </InputItem>
                      </List>
                      <WhiteSpace size='xl' />
                      <WhiteSpace size='xl' />
                      <Button style={{ borderRadius: '50px', color: '#fff', backgroundColor: '#ffda7a' }}>注册</Button>
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