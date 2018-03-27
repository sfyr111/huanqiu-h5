import React from 'react'
import { WeixinTitle } from 'react-weixin-title'
import { Button } from 'antd-mobile'

import '../../../common/stylus/textAndApplication.styl'

class OperationFund extends React.Component {

  render() {

    return (
      <WeixinTitle title='运营基金' src=''>
        <div style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>
          <main>
            <h1>

            紫萌青少年创新发展基金
            </h1>
            <p>

            江苏省儿基会（江苏省儿童少年福利基金会）联合社会各界资源，由江苏环球惠通（优蚁网）牵头发起的“紫萌创新发展基金”，全国首个IP专项主题的青少年公益发展基金。
            </p>
            <p>

            该基金旨在汇聚社会各界的爱心力量和科技创新资源，通过开展丰富多彩的主题活动和知识、技能大赛，推动青少年科学素质建设，激发青少年崇尚科学、探索未知、敢于创新的热情，拓展其知识面和想象力，在青少年乃至全社会推动形成讲科学、爱创新、培养科学的研发习惯，引导青少年正确的创新发展观，营造全社会尊重知识、尊重科学的良好氛围，为圆梦创新型国家和世界科技强国培育优良“科学种子”。
            </p>
            <p>

            对于闲置的专利和商标，您可以把它们捐赠给江苏省儿童少年福利基金会！
            </p>
            <p>

            儿基会将在保证“您”享有与“放弃”专利权后同等权利的前提下，将此专利权进行公开拍卖处置，所得善款将视为您捐献给儿基会紫萌专项基金的慈善捐款。
            </p>
            <p>

            基金未来将用于青少年儿童的创新教育培训，改善贫困地区少年儿童的学习用具，优化特殊地区青少年科教环境等各类儿童科教活动。对于您的慷慨与爱心，我们深表感激，并会按照相关规定授予您相关捐赠证明。
            </p>
            <p>

            我们真诚地感谢您对青少年创新发展给予的支持与贡献！同时，基金会也将对您捐助专利的最终处置金额，作为企业捐助开具票据抵税。
            </p>

          </main>
          <section className='application' style={{ display: 'flex' }}>
            <Button style={{ flexBasis: '50%', color: '#f1b347', backgroundColor: '#262626' }}>我要捐献</Button>
            <Button style={{ flexBasis: '50%', color: '#262626', backgroundColor: '#f1b347' }}>我要购买</Button>
          </section>
        </div>

      </WeixinTitle>
    )
  }
}

export default OperationFund