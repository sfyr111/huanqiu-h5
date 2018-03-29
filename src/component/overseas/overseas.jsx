import React from 'react'
import { Route } from 'react-router-dom'
import { Tabs, List } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'

import { connect } from 'react-redux'
import { getAllOverseas } from '../../redux/overseas.redux'

import OverseasDetail from '../overseasDetail/overseasDetail'

import './overseas.styl'

@connect(
  state => state.overseas,
  { getAllOverseas }
)
class Overseas extends React.Component {

  componentDidMount() {
    const { getAllOverseas } = this.props
    getAllOverseas()
  }

  render() {
    const { overseasList } = this.props

    const mapper = {
      americaList: overseasList.filter(item => item.area === 1) || [],
      europeList: overseasList.filter(item => item.area === 2) || [],
      chinaList: overseasList.filter(item => item.area === 3) || [],
      jkList: overseasList.filter(item => item.area === 4) || [],
    }

    const tabs = [
      { title: <span>美洲</span> },
      { title: <span>欧洲</span> },
      { title: <span>一带一路国家</span> },
      { title: <span>日韩</span> }
    ]

    const page = {
      path: '/product/wiki/overseas/:id',
      component: OverseasDetail
    }

    return (
      <WeixinTitle title='海外案例' src=''>
        <div id="overseas" style={{ backgroundColor: '#fff', zIndex: 100, position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="overseas-content">
            <Tabs
              tabs={tabs}
              animated={false}
              swipeable={false}
              tabBarActiveTextColor='#f3b439'
              tabBarUnderlineStyle={{ border: '0.02667rem #f3b439 solid' }}
            >
              {Object.keys(mapper).map(key => (
                <section className="tab-item" key={key}>
                  <List className='list'>
                    {mapper[key].map((item, index) => (
                      <List.Item onClick={() => this.props.history.push(`/product/wiki/overseas/${item.id}`)} key={item.id}>{item.title}</List.Item>
                    ))}
                  </List>
                </section>
              ))}

              {/*/!*美洲*!/*/}
              {/*<section className="tab-item">*/}
                {/*<List className='list'>*/}
                  {/*{new Array(25).fill('').map((item, index) => (*/}
                    {/*<List.Item onClick={() => this.props.history.push(`/product/wiki/overseas/${index}`)} key={index}>美洲TitleTitleTitleTitle</List.Item>*/}
                  {/*))}*/}
                {/*</List>*/}
              {/*</section>*/}
              {/*/!*欧洲*!/*/}
              {/*<section className="tab-item">*/}
                {/*<List className='list'>*/}
                  {/*{new Array(25).fill('').map((item, index) => (*/}
                    {/*<List.Item onClick={() => this.props.history.push(`/product/wiki/overseas/${index}`)} key={index}>欧洲TitleTitleTitleTitle</List.Item>*/}
                  {/*))}*/}
                {/*</List>*/}
              {/*</section>*/}
              {/*/!*一带一路国家*!/*/}
              {/*<section className="tab-item">*/}
                {/*<List className='list'>*/}
                  {/*{new Array(25).fill('').map((item, index) => (*/}
                    {/*<List.Item onClick={() => this.props.history.push(`/product/wiki/overseas/${index}`)} key={index}>国家TitleTitleTitleTitle</List.Item>*/}
                  {/*))}*/}
                {/*</List>*/}
              {/*</section>*/}
              {/*/!*日韩*!/*/}
              {/*<section className="tab-item">*/}
                {/*<List className='list'>*/}
                  {/*{new Array(25).fill('').map((item, index) => (*/}
                    {/*<List.Item onClick={() => this.props.history.push(`/product/wiki/overseas/${index}`)} key={index}>日韩TitleTitleTitleTitle</List.Item>*/}
                  {/*))}*/}
                {/*</List>*/}
              {/*</section>*/}
            </Tabs>
          </div>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>
      </WeixinTitle>
    )
  }
}

export default Overseas