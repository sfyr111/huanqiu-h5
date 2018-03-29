/**
 * @title 智金联盟
 * @childPage 律师详情
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { WeixinTitle } from 'react-weixin-title'
import { Tabs, List } from 'antd-mobile';

import { connect } from 'react-redux'
import { getAllUnion } from '../../redux/union.redux'

import UnionDetail from '../unionDetail/unionDetail'

import './union.styl'

@connect(
  state => state.union,
  { getAllUnion }
)
class Union extends React.Component {

  componentDidMount() {
    const { getAllUnion } = this.props
    getAllUnion()
  }

  render() {
    const { unionList } = this.props

    const mapper = {
      americaList: unionList.filter(item => item.area === 1) || [],
      europeList: unionList.filter(item => item.area === 2) || [],
      chinaList: unionList.filter(item => item.area === 3) || [],
      jkList: unionList.filter(item => item.area === 4) || [],
    }

    const tabs = [
      { title: <span>美洲</span> },
      { title: <span>欧洲</span> },
      { title: <span>一带一路国家</span> },
      { title: <span>日韩</span> }
    ]

    const page = {
      path: '/product/union/:id',
      component: UnionDetail // 律师详情
    }

    return (
      <WeixinTitle title='智金联盟' src=''>
        <div id="union" style={{ backgroundColor: '#f5f5f5', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="union-content">
            <Tabs
              tabs={tabs}
              animated={false}
              swipeable={false}
              tabBarActiveTextColor='#f3b439'
              tabBarUnderlineStyle={{ border: '0.02667rem #f3b439 solid' }}
            >
              {Object.keys(mapper).map(key => (
                <section className='tab-item' key={key}>
                  <ul>
                    {mapper[key].map((item, index) => (
                      <li key={item.id} onClick={() => this.props.history.push(`/product/union/${item.id}`)}>
                        <section>
                          <figure><img src={item.imgHead} /></figure>
                          <main>
                            <p>姓名: <span>{item.name}</span></p>
                            <p>职务: <span>{item.post}</span></p>
                            <p>地区: <span>{item.areaFmt}</span></p>
                          </main>
                        </section>
                        <footer>擅长领域: {item.skilledZone}</footer>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </Tabs>
          </div>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>
      </WeixinTitle>
    )
  }
}

export default Union