import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'
import { Route } from 'react-router-dom';

import './goldLibraryDetail.styl'

/**
 *     const page = {
      path: '/product/wiki/overseas/:id',
      component: OverseasDetail
    }
 */
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
    console.log(this.props);

    return (
      <WeixinTitle title='律师详情' src=''>
        <div id='goldLibraryDetail' style={{ background: '#f5f5f5', position: 'fixed', zIndex: 200, left: '0', right: '0', top: '0', bottom: '0' }}>
          <div className="goldLibraryDetail-content">
            <header>
              <section>
                <figure><img src="http://temp.im/110x110/FF2D55/000" alt=''/></figure>
                <main>
                  <p>姓名: <span>AAAAAAA</span></p>
                  <p>职务: <span>职务职务职务职务职务职务</span></p>
                  <p>地区: <span>地区地区地区地区地区地区地区</span></p>
                </main>
              </section>
              <footer>擅长领域: 专利侵权诉讼, 专利无效宣告, 专利许可, 专利保护</footer>
            </header>
            <main>
              <p style={{ height: '648px' }}>
                简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
              </p>
              <Button style={{ color: '#fff', backgroundColor: '#ffda7a' }} onClick={this.onClick}>申请入库</Button>
            </main>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default GoldLibraryDetail