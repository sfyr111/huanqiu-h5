import React from 'react'
import { Tabs } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'

import './goldAllusion.styl'


class GoldAllusion extends React.Component {

  render() {
    const tabs = [
      { title: <span>美洲</span> },
      { title: <span>欧洲</span> },
      { title: <span>一带一路国家</span> },
      { title: <span>日韩</span> }
    ]

    return (
      <WeixinTitle title='智金典' src=''>
        <div id="goldAllusion" style={{ backgroundColor: '#fff', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="goldAllusion-content">
            <Tabs
              tabs={tabs}
              animated={false}
              swipeable={false}
            >
              {/*美洲*/}
              <section className="tab-item">
                <ul>
                  {new Array(25).fill('').map((item, index) => (
                    <li key={index}>
                      <span>美洲专利法</span>
                      <img src={require('./img/下载@2x.png')} alt=""/>
                    </li>
                  ))}
                </ul>
              </section>
              {/*欧洲*/}
              <section className="tab-item">
                <ul>
                  {new Array(25).fill('').map((item, index) => (
                    <li key={index}>
                      <span>欧洲专利法</span>
                      <img src={require('./img/下载@2x.png')} alt=""/>
                    </li>
                  ))}
                </ul>
              </section>
              {/*一带一路国家*/}
              <section className="tab-item">
                <ul>
                  {new Array(25).fill('').map((item, index) => (
                    <li key={index}>
                      <span>国家专利法</span>
                      <img src={require('./img/下载@2x.png')} alt=""/>
                    </li>
                  ))}
                </ul>
              </section>
              {/*日韩*/}
              <section className="tab-item">
                <ul>
                  {new Array(25).fill('').map((item, index) => (
                    <li key={index}>
                      <span>日韩专利法</span>
                      <img src={require('./img/下载@2x.png')} alt=""/>
                    </li>
                  ))}
                </ul>
              </section>
            </Tabs>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default GoldAllusion