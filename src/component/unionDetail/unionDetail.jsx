import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { connect } from 'react-redux'

import './unionDetail.styl'

@connect(
  state => state.union
)
class UnionDetail extends React.Component {

  render() {
    const { id } = this.props.match.params
    const [detail] = this.props.unionList.filter(item => item.id === Number(id))

    return (
      <WeixinTitle title='律师详情' src=''>
        <div id='unionDetail' style={{ background: '#f5f5f5', position: 'fixed', zIndex: 200, left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="unionDetail-content">
            <header>
              <section>
                <h2>{detail.title}</h2>
                <p>所在地区: <span>{detail.areaFmt}</span></p>
                <p>主要业务领域: <span>{detail.skilledZone}</span></p>
              </section>
            </header>
            <main>
              <h2>简介:</h2>
              <p style={{}}>
                {detail.content}
              </p>
            </main>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default UnionDetail