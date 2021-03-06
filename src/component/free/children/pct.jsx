import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import { Route } from 'react-router'
import Form from '../form/pct'

import '../../../common/stylus/textAndApplication.styl'
class Pct extends React.Component {

  render() {
    const page = {
      path: '/product/free/pct/form',
      component: Form
    }

    return (
      <WeixinTitle title='PCT支援' src=''>
        <div style={{ height: '100vh', overflow: 'auto', background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
          <main className='text-app'>
            <h1>PCT申请免费支援服务</h1>
            <p>
              《专利合作条约》（PCT）是1970年在华盛顿签订、1978年生效的一个多边国际条约。它是申请人在PCT缔约国中寻求专利国际保护的主要工具，也是关于多边工作共享和合作的典范。
            </p>
            <p>
              专利合作条约(PCT)方便申请人在国际上寻求对其发明的国际专利保护，帮助专利局作出专利授予决定，便利公众查阅这些发明中涉及的丰富技术信息。根据PCT提交一件国际专利申请，申请人可以同时在全世界152个国家寻求对其发明的保护。
            </p>

            <h2>
              PCT程序包括：
            </h2>
            <p>
              提交申请：申请人以一种语言，向一个国家或地区专利局或者WIPO提交一份满足PCT形式要求的国际申请，并缴纳一组费用；
            </p>
            <p>
              国际检索：由“国际检索单位”（ISA）（世界主要专利局之一）检索可影响发明专利性的已公布专利文献和技术文献（“现有技术”），并对发明的可专利性提出书面意见。
            </p>
            <p>
              国际公布：国际申请中的内容将自最早申请日起18个月届满之后尽早公之于众。
            </p>
            <p>
              补充国际检索（可选）：经申请人要求，由第二家国际检索单位查找进行主检索的第一家国际检索单位因现有技术在语言和技术领域上的多样性而未能检索到的已公布文献。
            </p>
            <p>
              国际初步审查（可选）：经申请人要求，由某一国际检索单位进行另外的专利性分析，通常针对的是修改过的申请。
            </p>
            <p>
              国家阶段：在PCT程序结束后，通常是申请人提出优先权要求的首次申请的最早申请日起30个月后，申请人开始直接向希望获得专利的国家或地区专利局寻求专利授予。
            </p>

            <h2>
              注意事项：
            </h2>

            <p>
              ①	申请人可在自优先权日起30/31个月届满前选择PCT成员国，并向该国专利局申请其国家专利，即：进入该国的国家阶段。
            </p>
            <p>
              PCT国际申请进入国家阶段时，须要将申请文件翻译为申请国的官方语言，其主要程序与在国内申请专利相同，即包括：申请进入、公布、实质审查、授权等程序。对于实用新型，大多数国家无须实质审查即可授权；有些国家没有实用新型专利，如：美国、加拿大、英国等，在这些国家只能申请发明专利。
            </p>
            <p>
              虽然国家阶段的费用与单独在各个国家申请国家专利的费用差不多，但是其优点是可以将优先权期限从12个月延长到30/31个月向其成员国申请国家专利，使申请人有更多的时间来决定进入哪些国家申请相同主题的专利，并根据检索报告和初审报告修改专利申请文件，以满足发明创造的新颖性、创造性和专利性。
            </p>
            <p>
              ②	完成进入不同国家的国家阶段的工作后，申请人则拥有不同国家的专利，他们相互独立，每一项都需要缴纳年费。申请人一般需提前2～3个月确定进入哪些国家的国家阶段，并委托涉外代理机构启动翻译和文件准备工作。在与知识产权代理公司签订代理合同并支付合同约定的费用后，即可进入申请程序。
            </p>
            <p>
              寰球智金·知识产权海外维权及国际合作平台将为用户提供最新的PCT申请流程及技巧培训、针对申请人的PCT申请诊断和服务机构甄选推荐服务机构，并可为在校大学生、初创企业、小微企业、独角兽企业申请PCT专利提供免息资金垫付服务，还可免费协助本市注册的高新技术企业办理“专利/PCT申请专项垫资”申请。
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

export default Pct