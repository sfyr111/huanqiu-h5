import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { openUrl } from '../../common/js/util'
import { WeixinTitle } from 'react-weixin-title'

@connect(
  state => state.lectureHall,
)
class LectureHallDetail extends React.Component {

  render() {
    const { id } = this.props.match.params
    const [detail] = this.props.lectureHallList.filter(item => item.id === Number(id))

    return (
      <WeixinTitle title='活动详情' src="">
        <div id="lectureHallDetail" style={{ backgroundColor: '#fff', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <main className="lectureHallDetail-content text-app">
            <h1>{detail.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: detail.content }} />
          </main>
          <Button onClick={() => openUrl(detail.imgHead)}>附件查看</Button>
        </div>
      </WeixinTitle>
    )
  }
}

export default LectureHallDetail
