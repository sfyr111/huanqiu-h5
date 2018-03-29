import React from 'react'
import { WeixinTitle } from 'react-weixin-title'

import { connect } from 'react-redux'
import { getAllPatentLibrary } from '../../redux/patentLibrary.redux'
import { openUrl } from '../../common/js/util'

import './patentLibrary.styl'

@connect(
  state => state.patentLibrary,
  { getAllPatentLibrary }
)
class PatentLibrary extends React.Component {

  componentDidMount() {
    const { getAllPatentLibrary } = this.props
    getAllPatentLibrary()
  }

  render() {
    const { patentLibraryList } = this.props
    console.log(patentLibraryList)

    return (
      <WeixinTitle title='专利数据库' src=''>
        <div id="patentLibrary" style={{ backgroundColor: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="patentLibrary-content">
            <ul className="list">
              <li>
                <span>官方检索资源</span>
                <span>代码</span>
                <span>地区 / 组织</span>
                <span>官方语种</span>
              </li>
              <li>
                <span>官方检索资源</span>
                <span>代码</span>
                <span>地区 / 组织</span>
                <span>官方语种</span>
              </li>
              {patentLibraryList.map((item, index) => (
                <li key={item.id}>
                  <span onClick={() => openUrl(item.imgHead)}>{item.name}</span>
                  <span>{item.idCard}</span>
                  <span>{item.title}</span>
                  <span>{item.email}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default PatentLibrary
