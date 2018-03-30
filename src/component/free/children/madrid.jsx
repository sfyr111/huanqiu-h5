import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import { Route } from 'react-router'
import Form from '../form/madrid'

import '../../../common/stylus/textAndApplication.styl'

class Madrid extends React.Component {

  render() {
    const page = {
      path: '/product/free/madrid/form',
      component: Form
    }

    return (
      <WeixinTitle title='马德里商标申请支援' src=''>
        <div style={{ height: '100vh', overflow: 'auto', background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
          <main className='text-app'>
            <h1>
              马德里商标申请支援
            </h1>
            <p>
              为了能给世界各地注册以及管理商标提供一站式解决方案，因此才有了马德里体系。要在95个成员的领土上保护你的商标，使用一种语言、提交一份申请、缴纳一组费用即可。通过一个集中化的系统就能管理全部商标。
            </p>
            <h2>
              马德里商标注册流程
            </h2>
            <p>

            ①	商标查询
            </p>
            <p>

            ②	确定能否注册
            </p>
            <p>

            ③	准备申请材料
            </p>
            <p>

            ④	提交商标注册申请
            </p>
            <p>

            ⑤	下放受理通知书
            </p>
            <p>

            ⑥	进行实质审查
            </p>
            <p>

            ⑦	准许注册
            </p>
            <p>

            ⑧	进入公示期
            </p>
            <p>

            ⑨	公示期无异议
            </p>
            <p>

            ⑩	注册成功
            </p>

            <h2>

            申请马德里商标时会遇到以下风险：
            </h2>
            <p>

            １、填写申请材料时候语言障碍难以克服，填写错误导致被驳回
            </p>
            <p>

            ２、没专业代理人的指导，不知如何选择并填写正确的申请表格，填写不当导致驳回
            </p>
            <p>

            ３、官方下发补正答辩通知等文件无法在第一时间获得，处理不当导致驳回
            </p>
            <p>

            ４、承担高昂的申请及交通费用
            </p>

            <p>

            寰球智金·紫金知识产权国际平台将为想要注册申请马德里商标的用户提供查询分析服务，协助需要用户制作申请材料，并可为个人及企业申请马德里商标提供免息资金垫付服务，部分地区用户商标注册成功后的补贴申请也可协助办理。
            </p>


          </main>
          <section className='application' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={() => this.props.history.push(page.path)} style={{ color: '#262626', backgroundColor: '#f1b347', width: '100%' }}>在线申请</Button>
          </section>
        </div>

      </WeixinTitle>
    )
  }
}

export default Madrid