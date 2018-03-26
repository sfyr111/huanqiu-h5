import React from 'react'
import { WeixinTitle } from 'react-weixin-title'

import './patentLibrary.styl'

class PatentLibrary extends React.Component {

  render() {
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
              {new Array(25).fill('').map((item, index) => (
                <li key={index}>
                  <span>全球外观设计资源库</span>
                  <span>WO</span>
                  <span>世界组织产权组织</span>
                  <span>英语</span>
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
