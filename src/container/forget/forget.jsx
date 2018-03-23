import React from 'react'
import { Tabs, NavBar, WingBlank, WhiteSpace, List, InputItem, Button, Icon } from 'antd-mobile'
import { createForm } from 'rc-form';

import './forget.styl'

@createForm()
class Forget extends React.Component {

  render() {
    const tabs = [
      { title: <span>忘记密码</span> },
    ]

    const { getFieldProps } = this.props.form

    return (
      <div id="forget">
        <div className="forget-content" style={{ backgroundColor: '#fff', height: '100vh' }}>
          <nav>
            <NavBar
              icon={<Icon type="left" />}
              onLeftClick={() => this.props.history.goBack()}
              mode="light"
            />
          </nav>
          <WhiteSpace />
          <section className="form">
            <WingBlank>
              <WingBlank>
                <Tabs
                  tabs={tabs}
                >
                  <section>
                    <WhiteSpace size='xl' />
                    <List>
                      <InputItem
                        {...getFieldProps('regUsername')}
                        placeholder="输入用户名"
                      >
                        <img src={require('./img/用户名@2x.png')} alt="" />
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
                        <Button style={{ position: 'absolute', right: 0, top: '0.16rem' }} size='small' type='ghost'>获取验证码</Button>
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
                    </List>
                    <WhiteSpace size='xl' />
                    <WhiteSpace size='xl' />
                    <Button style={{ borderRadius: '50px', color: '#fff', backgroundColor: '#ffda7a' }}>修改密码</Button>
                  </section>
                </Tabs>
              </WingBlank>
            </WingBlank>
          </section>
        </div>
      </div>
    )
  }
}

export default Forget