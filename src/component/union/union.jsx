/**
 * @title 智金联盟
 * @childPage 律师详情
 */
import React from 'react'
import { Route } from 'react-router-dom'
import { WeixinTitle } from 'react-weixin-title'
import { Tabs, List } from 'antd-mobile';

import UnionDetail from '../unionDetail/unionDetail'

import './union.styl'

class Union extends React.Component {

  render() {
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
              {/*美洲*/}
              <section className='tab-item'>
                <List>
                  {new Array(30).fill('').map((item, index) => (
                    <List.Item key={index} onClick={() => this.props.history.push(`/product/union/${index}`)}>
                      美洲美洲美洲律师事务所
                    </List.Item>
                  ))}
                </List>
              </section>
              {/*欧洲*/}
              <section className='tab-item'>
                <ul>
                  {new Array(30).fill('').map((item, index) => (
                    <List.Item key={index} onClick={() => this.props.history.push(`/product/union/${index}`)}>
                      欧洲欧洲欧洲律师事务所
                    </List.Item>
                  ))}
                </ul>
              </section>
              {/*一带一路国家*/}
              <section className='tab-item'>
                <ul>
                  {new Array(30).fill('').map((item, index) => (
                    <List.Item key={index} onClick={() => this.props.history.push(`/product/union/${index}`)}>
                      国家国家国家律师事务所
                    </List.Item>
                  ))}
                </ul>
              </section>
              {/*日韩*/}
              <section className='tab-item'>
                <ul>
                  {new Array(30).fill('').map((item, index) => (
                    <List.Item key={index} onClick={() => this.props.history.push(`/product/union/${index}`)}>
                      日韩日韩日韩日律师事务所
                    </List.Item>
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

export default Union