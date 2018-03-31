import React from 'react'
import { Tabs } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'
import { openUrl } from '../../common/js/util'

import { connect } from 'react-redux'
import { getAllGoldAllusion } from '../../redux/goldAllusion.redux'

import './goldAllusion.styl'

@connect(
  state => state.goldAllusion,
  { getAllGoldAllusion }
)
class GoldAllusion extends React.Component {

  componentDidMount() {
    const { getAllGoldAllusion } = this.props
    getAllGoldAllusion()
  }

  render() {
    const { goldAllusionList } = this.props

    const mapper = {
      americaList: goldAllusionList.filter(item => item.area === 1) || [],
      europeList: goldAllusionList.filter(item => item.area === 2) || [],
      chinaList: goldAllusionList.filter(item => item.area === 3) || [],
      jkList: goldAllusionList.filter(item => item.area === 4) || [],
    }

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
              tabBarActiveTextColor='#f3b439'
              tabBarUnderlineStyle={{ border: '0.02667rem #f3b439 solid' }}
            >
              {Object.keys(mapper).map(key => (
                <section className='tab-item' key={key}>
                  <ul>
                    {mapper[key].map((item, index) => (
                      <li key={item.id} onClick={() => openUrl(item.imgHead)}>
                        <span>{item.name}</span>
                        {/*<img onClick={() => openUrl(item.imgHead)} src={require('./img/下载@2x.png')} alt=""/>*/}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </Tabs>
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default GoldAllusion