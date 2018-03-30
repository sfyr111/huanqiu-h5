import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import { Route } from 'react-router'
import Form from '../form/lang'

import '../../../common/stylus/textAndApplication.styl'

const page = {
  path: '/product/free/lang/form',
  component: Form
}

class Lang extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
     const currentPath = this.props.location.pathname;
    this.props.history.push(`${currentPath}/form`);
  }

  render() {

    return (
      <WeixinTitle title='多语支援' src=''>
        <div style={{ height: '100vh', overflow: 'auto', background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <main className='text-app'>
            <h1>
              多语支援
            </h1>
            <p>
              WIPO对于PCT文件的翻译有着非常严格的质量标准。对于一些在多个国家申请 PCT 专利的客户来说，他们常常担心翻译成本过高、各个翻译版本内容不一致和专利申请文件信息泄露等问题。平台可根据用户需要，提供优质的翻译质量评估服务，降低翻译错误率和保证各翻译版本的协调统一。
            </p>
            <p>
              寰球智金·紫金知识产权国际平台将针对16种文献常用语言，对用户已有翻译文件（如说明书、权利要求书、审查意见通知书等）及其他知识产权类相关翻译文件提供翻译质量评估服务。也可接受第三方委托对翻译成品进行再一次的镜像翻译以确保翻译正确率，减少翻译缺陷、提升专利自身质量。
            </p>
          </main>
          <section className='application' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{ color: '#262626', backgroundColor: '#f1b347', width: '100%' }} onClick={() => this.props.history.push(page.path)}>在线申请</Button>
          </section>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>

      </WeixinTitle>
    )
  }
}

export default Lang