import React from 'react'
import { Route } from 'react-router-dom'
import { WeixinTitle } from 'react-weixin-title'
import { Tabs } from 'antd-mobile';

import GoldLibraryDetail from '../goldLibraryDetail/goldLibraryDetail'

import './goldLibrary.styl'

class GoldLibrary extends React.Component {
  constructor() {
    super()
  }

  render() {
    const tabs = [
      { title: <span>美洲</span> },
      { title: <span>欧洲</span> },
      { title: <span>一带一路国家</span> },
      { title: <span>日韩</span> }
    ]

    const page = {
      path: '/product/wiki/goldLibrary/:id',
      component: GoldLibraryDetail
    }

    return (
      <WeixinTitle title='智金库' src=''>
        <div id="goldLibrary" style={{ backgroundColor: '#f5f5f5', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="goldLibrary-content">
            <Tabs
              tabs={tabs}
              animated={false}
              swipeable={false}
            >
              {/*美洲*/}
              <section className='tab-item'>
                <ul>
                  {new Array(10).fill('').map((item, index) => (
                    <li key={index} onClick={() => this.props.history.push(`/product/wiki/goldLibrary/${index}`)}>
                      <section>
                        <figure><img src="http://temp.im/110x110/FF2D55/000" /></figure>
                        <main>
                          <p>姓名: <span>AAAAAAA</span></p>
                          <p>职务: <span>职务职务职务职务职务职务</span></p>
                          <p>地区: <span>地区地区地区地区地区地区地区</span></p>
                        </main>
                      </section>
                      <footer>擅长领域: 专利侵权诉讼, 专利无效宣告, 专利许可, 专利保护</footer>
                    </li>
                  ))}
                </ul>
              </section>
              {/*欧洲*/}
              <section className='tab-item'>
                <ul>
                  {new Array(10).fill('').map((item, index) => (
                    <li key={index} onClick={() => this.props.history.push(`/product/wiki/goldLibrary/${index}`)}>
                      <section>
                        <figure><img src="http://temp.im/110x110/FF2D55/000" /></figure>
                        <main>
                          <p>姓名: <span>BBBBBBBB</span></p>
                          <p>职务: <span>职务职务职务职务职务职务</span></p>
                          <p>地区: <span>地区地区地区地区地区地区地区</span></p>
                        </main>
                      </section>
                      <footer>擅长领域: 专利侵权诉讼, 专利无效宣告, 专利许可, 专利保护</footer>
                    </li>
                  ))}
                </ul>
              </section>
              {/*一带一路国家*/}
              <section className='tab-item'>
                <ul>
                  {new Array(10).fill('').map((item, index) => (
                    <li key={index} onClick={() => this.props.history.push(`/product/wiki/goldLibrary/${index}`)}>
                      <section>
                        <figure><img src="http://temp.im/110x110/FF2D55/000" /></figure>
                        <main>
                          <p>姓名: <span>CCCCCCCC</span></p>
                          <p>职务: <span>职务职务职务职务职务职务</span></p>
                          <p>地区: <span>地区地区地区地区地区地区地区</span></p>
                        </main>
                      </section>
                      <footer>擅长领域: 专利侵权诉讼, 专利无效宣告, 专利许可, 专利保护</footer>
                    </li>
                  ))}
                </ul>
              </section>
              {/*日韩*/}
              <section className='tab-item'>
                <ul>
                  {new Array(10).fill('').map((item, index) => (
                    <li key={index} onClick={() => this.props.history.push(`/product/wiki/goldLibrary/${index}`)}>
                      <section>
                        <figure><img src="http://temp.im/110x110/FF2D55/000" /></figure>
                        <main>
                          <p>姓名: <span>DDDDDDDD</span></p>
                          <p>职务: <span>职务职务职务职务职务职务</span></p>
                          <p>地区: <span>地区地区地区地区地区地区地区</span></p>
                        </main>
                      </section>
                      <footer>擅长领域: 专利侵权诉讼, 专利无效宣告, 专利许可, 专利保护</footer>
                    </li>
                  ))}
                </ul>
              </section>
            </Tabs>
          </div>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>
      </WeixinTitle>
    )
  }
}

export default GoldLibrary