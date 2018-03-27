import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import '../../common/stylus/textAndApplication.styl'

class Auction extends React.Component {

  render() {

    return (
      <WeixinTitle title='智金拍卖' src=''>
        <div style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <main className='text-app'>
            <h1>
            寰球智金拍-知识产权在线竞价在线拍卖平台

            </h1>
            <p>

            和全球领先的供应链协同共享平台合作，开辟以拍卖方式对知识产权进行处置的在线交易平台，对企业的无形资产（知识产权资产）进行快速价值变现和价值提升。 实现无形资产的商业价值最大化，并促进企业创新活动的良性循环。
            </p>


          </main>
          <section className='application' style={{ display: 'flex' }}>
            <Button style={{ flexBasis: '50%', color: '#f1b347', backgroundColor: '#262626' }}>我要拍卖</Button>
            <Button style={{ flexBasis: '50%', color: '#262626', backgroundColor: '#f1b347' }}>我要参拍</Button>
          </section>
        </div>

      </WeixinTitle>
    )
  }
}

export default Auction