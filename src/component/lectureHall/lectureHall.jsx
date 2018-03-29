import React from 'react'
import { Route } from 'react-router-dom'
import { WeixinTitle } from 'react-weixin-title'
import { List } from 'antd-mobile'

import { connect } from 'react-redux'
import { getAllLectureHall } from '../../redux/lectureHall.redux'

import LectureHallDetail from '../lectureHallDetail/lectureHallDetail'

import './lectureHall.styl'

@connect(
  state => state.lectureHall,
  { getAllLectureHall }
)
class LectureHall extends React.Component {

  componentDidMount() {
    const { getAllLectureHall } = this.props
    getAllLectureHall()
  }

  render() {
    const { lectureHallList } = this.props

    const page = {
      path: '/product/wiki/lectureHall/:id',
      component: LectureHallDetail
    }

    return (
      <WeixinTitle title='智金大讲堂' src=''>
        <div id="lectureHall" style={{ backgroundColor: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="lectureHall-content">
            <main style={{ fontSize: 14, lineHeight: 1.4 }}>
              <p>
                与南京大学知识产权培训基地深度合作，将不定期举办线下培训课程及训练营。并依托线下培训课程设置在线知识产权网课，为有需求的人群提供线下培训课程课件下载。内容涵盖海外主要国家的：专利权、著作权、商标权的相关介绍，专利义务、专利权属的标准，知识产权作为商业战略的应用，专利全球文献检索等。

              </p>
              <p>
                训练营包含三种不同培训模式，分别为：启智营、创智营、金智营，针对不同年龄段、不同需求人群量身打造，提供适合的培训交流条件。

              </p>
              <figure>
                <img style={{ width: '100%' }} src={require('./img/大讲堂.png')} alt=""/>
              </figure>
              <section className="recent-active">
                <List renderHeader={() => '近期活动'}>
                  {lectureHallList.map((item, index) => (
                    <List.Item
                      // todo 少时间参数
                      extra={'4月12日'}
                      key={item.id}
                      activeStyle={{ backgroundColor: '#fff' }}
                      onClick={() => this.props.history.push(`/product/wiki/lectureHall/${item.id}`)}
                    >
                      {item.title}
                    </List.Item>
                  ))}
                </List>
              </section>
            </main>
          </div>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>
      </WeixinTitle>
    )
  }
}

export default LectureHall