import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import GoldLibraryDetailForm from '../goldLibraryDetailForm/index';
import './goldLibraryDetail.styl'

const page = {
  path: '/product/wiki/goldLibrary/:id/form',
  component: GoldLibraryDetailForm
}

@connect(
  state => state.goldLibrary
)
class GoldLibraryDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visiable: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    const currentPath = this.props.location.pathname;
    this.props.history.push(`${currentPath}/form`);
  }

  render() {
    const { id } = this.props.match.params
    const [detail] = this.props.goldLibraryList.filter(item => item.id === Number(id))

    return (
      <WeixinTitle title='律师详情' src=''>
        <div id='goldLibraryDetail' style={{ background: '#f5f5f5', position: 'fixed', zIndex: 200, left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="goldLibraryDetail-content">
            <header>
              <section>
                <figure><img src={detail.imgHead} alt=''/></figure>
                <main>
                  <p>姓名: <span>{detail.name}</span></p>
                  <p>职务: <span>{detail.post}</span></p>
                  <p>地区: <span>{detail.areaFmt}</span></p>
                </main>
              </section>
              <footer>擅长领域: {detail.skilledZone}</footer>
            </header>
            <main>
              <article style={{ height: '648px', overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: detail.content }} />
              <Button style={{ color: '#fff', backgroundColor: '#ffda7a' }} onClick={this.onClick}>申请入库</Button>
            </main>
          </div>
          { page ? <Route location={this.props.location} key={this.props.location.pathname} path={page.path} component={page.component} /> : null }
        </div>
      </WeixinTitle>
    )
  }
}

export default GoldLibraryDetail