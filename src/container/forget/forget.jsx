import React from 'react'
import { Tabs, WingBlank, WhiteSpace, List, InputItem, Button, Icon } from 'antd-mobile'
import { createForm } from 'rc-form'
import { WeixinTitle } from 'react-weixin-title'

import './forget.styl'

@createForm()
class Forget extends React.Component {

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
                          {...getFieldProps('username')}
                          placeholder="输入用户名"
                        >
                          <img src={require('./img/用户名@2x.png')} alt="" />
                        </InputItem>
                        <InputItem
                          {...getFieldProps('phone')}
                          placeholder="输入手机号"
                        >
                          <img src={require('./img/手机号@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('verifyCode')}
                          placeholder="输入验证码"
                        >
                          <img src={require('./img/验证码@2x.png')} alt=""/>
                          <Button style={{ position: 'absolute', right: 0, top: '0.16rem' }} size='small' type='ghost'>获取验证码</Button>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('password')}
                          placeholder="输入密码(6-20位)"
                        >
                          <img src={require('./img/密码1@2x.png')} alt=""/>
                        </InputItem>
                        <InputItem
                          {...getFieldProps('verifyPassword')}
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
      </WeixinTitle>
    )
  }
}

export default Forget