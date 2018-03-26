import React from 'react'
import { WeixinTitle } from 'react-weixin-title'

class LectureHallDetail extends React.Component {

  render() {
    return (
      <WeixinTitle title='活动详情'>
        <div id="lectureHallDetail" style={{ backgroundColor: '#fff', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="lectureHallDetail-content">
            LectureHallDetail 活动详情 有下载
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default LectureHallDetail
