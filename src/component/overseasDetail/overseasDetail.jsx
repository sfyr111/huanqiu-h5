import React from 'react'
import { connect } from 'react-redux'
import { WeixinTitle } from 'react-weixin-title'

import '../../common/stylus/textAndApplication.styl'

@connect(
  state => state.overseas
)
class OverseasDetail extends React.Component {

  render() {
    const { id } = this.props.match.params
    const [detail] = this.props.overseasList.filter(item => item.id === Number(id))

    return (
      <WeixinTitle title='案例详情' src=''>
        <div id="overseasDetail" style={{ backgroundColor: '#fff', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <main className="overseasDetail-content text-app">
            <h1>{detail.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: detail.content }} />
          </main>
        </div>
      </WeixinTitle>
      )
  }
}

export default OverseasDetail