import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import { Route } from 'react-router'
import JoinForm from './form/join-form'
import AuctionForm from './form/auction-form'

import '../../common/stylus/textAndApplication.styl'

class Auction extends React.Component {

  render() {
    const page = [
      {
        path: '/product/auction/join-form',
        component: JoinForm
      },
      {
        path: '/product/auction/auction-form',
        component: AuctionForm
      },
    ]

    return (
      <WeixinTitle title='智金拍卖' src=''>
        <div style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          {page.map(item => <Route location={this.props.location} key={this.props.location.pathname} path={item.path} component={item.component} />)}
          <main className='text-app'>
            <h1>
            寰球智金拍-知识产权在线竞价在线拍卖平台

            </h1>
            <p>

            和全球领先的供应链协同共享平台合作，开辟以拍卖方式对知识产权进行处置的在线交易平台，对企业的无形资产（知识产权资产）进行快速价值变现和价值提升。 实现无形资产的商业价值最大化，并促进企业创新活动的良性循环。
            </p>


          </main>
          <section className='application' style={{ display: 'flex' }}>
            <Button onClick={() => this.props.history.push('/product/auction/join-form')} style={{ flexBasis: '50%', color: '#f1b347', backgroundColor: '#262626' }}>我要拍卖</Button>
            <Button onClick={() => this.props.history.push('/product/auction/auction-form')} style={{ flexBasis: '50%', color: '#262626', backgroundColor: '#f1b347' }}>我要参拍</Button>
          </section>
        </div>

      </WeixinTitle>
    )
  }
}

export default Auction