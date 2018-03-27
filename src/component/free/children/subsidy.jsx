import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import '../../../common/stylus/textAndApplication.styl'

class Subsidy extends React.Component {

  render() {

    return (
      <WeixinTitle title='补贴申报' src=''>
        <div style={{ height: '100vh', overflow: 'auto', background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <main>
            <h1>

            补贴申报
            </h1>
            <p>

            为鼓励技术创新，促进知识产权的创造、应用和产业化，加快推进科技创新实施意见，引导鼓励各类创新主体开展自主创新，凸显知识产权创新驱动经济发展的作用，江苏省各地区均有相对应的专利申请补贴供重点扶持企业、研发机构、科研院所等申报。
            </p>
            <p>

            寰球智金·紫金知识产权国际平台将为园区的重点扶持企业、研发机构、科研院所等提供专利及PCT的补贴申报绿色通道，极大减轻企业申请专利的经济负担。
            </p>

          </main>
          <section className='application' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button style={{ color: '#262626', backgroundColor: '#f1b347', width: '100%' }}>在线申请</Button>
          </section>
        </div>

      </WeixinTitle>
    )
  }
}

export default Subsidy