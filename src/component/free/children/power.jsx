import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import { Route } from 'react-router'
import Form from '../form/power'

import '../../../common/stylus/textAndApplication.styl'

class Power extends React.Component {

  render() {
    const page = {
      path: '/product/free/power/form',
      component: Form
    }

    return (
      <WeixinTitle title='维权支援' src=''>
        <div style={{ height: '100vh', overflow: 'auto', background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
          <main className='text-app'>
            <h1>

            维权支援
            </h1>
            <p>

            随着国际经贸交流日益频繁，涉外知识产权纠纷也在持续增加，科学应对海外知识产权纠纷，及时化解知识产权问题，是企业国际化发展的重要保障。
            </p>
            <p>

            国际化发展中可能会遇到以下知识产权纠纷：接到律师函、遭遇临时禁令、遭遇知识产权侵权诉讼、遭遇知识产权相关贸易调查、遭遇海关执法、遭遇商业秘密纠纷。
            </p>
            <p>
            系统的企业海外维权救济机制包括资金的支持、法律服务、信息服务和市场服务等。海外知识产权纠纷维权，需要律师费、差旅费、收集证据费用、诉讼费等，维权成本高昂。一起海外专利纠纷，一般诉讼成本都在百万美元以上。以美国337调查为例，其程序时间一般为12-15个月，专利类案件的诉讼费用为120-150万美元，商标类案件约为20万美元，我国大多数企业根本无法承受。

            </p>
            <p>

            寰球智金·紫金知识产权国际平台为本市重点（高新技术）企业海外诉讼提供全程费用垫付（内容涵盖诉讼费、保全费、保险费、鉴定评估费、律师代理费等），在其约定诉讼结果实现时返还平台垫资；反之，则由平台自行承担垫资风险。
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

export default Power