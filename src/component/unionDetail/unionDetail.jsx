import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { Route } from 'react-router-dom';
import Form from './form'

import './unionDetail.styl'

const page = {
  path: '/product/union/:id/form',
  component: Form
}

@connect(
  state => state.union
)
class UnionDetail extends React.Component {

  onClick = () => {
    const currentPath = this.props.location.pathname;
    this.props.history.push(`${currentPath}/form`);
  }

  render() {
    const { id } = this.props.match.params
    const [detail] = this.props.unionList.filter(item => item.id === Number(id))

    return (
      <WeixinTitle title='律师详情' src=''>
        <div id='unionDetail' style={{ background: '#f5f5f5', position: 'fixed', zIndex: 200, left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="unionDetail-content">
            <header>
              <section>
                <h2>{detail.title}</h2>
                <p>所在地区: <span>{detail.areaFmt}</span></p>
                <p>主要业务领域: <span>{detail.skilledZone}</span></p>
              </section>
            </header>
            <main>
              <h2>简介:</h2>
              <p style={{}}>
                {detail.content}
              </p>
                <Button style={{ color: '#fff', backgroundColor: '#ffda7a' }} onClick={this.onClick}>申请入库</Button>
            </main>
          </div>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>
      </WeixinTitle>
    )
  }
}

export default UnionDetail