import React from 'react'
import { WeixinTitle } from 'react-weixin-title'

class OverseasDetail extends React.Component {

  render() {
    return (
      <WeixinTitle title='案例详情' src=''>
        <div id="overseasDetail" style={{ backgroundColor: '#fff', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="overseasDetail-content">
            overseasDetail
          </div>
        </div>
      </WeixinTitle>
      )
  }
}

export default OverseasDetail