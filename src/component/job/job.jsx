import React from 'react'
import { Card, Accordion, List } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'

import './job.styl'

class Job extends React.Component {

  render() {
    return (
      <WeixinTitle title='招聘' src=''>
        <div id="job" className="main">
          <div className="job-content">
            {new Array(8).fill('').map((item, index) => (
              <Card key={index}>
                <Card.Header
                  title="高级全栈工程师[南京]"
                />
                <Card.Body>
                  <p>阿斯蒂芬打撒发大水发送到发送到发送到发大水发多少sad发多少范德萨发大水放大放大阿斯蒂芬很多撒酒疯</p>
                  <p style={{ fontSize: 12 }}>请将简历发送至: ccccc@ccc.com</p>
                  <p style={{ fontSize: 12 }}>邮件标题格式: 地区+姓名+应聘职位</p>
                </Card.Body>
                <Card.Footer content={
                  <Accordion>
                    <Accordion.Panel header="职位描述">
                      <List>
                        <List.Item>描述1描述1描述1描述1描述1描述1</List.Item>
                        <List.Item>描述1描述1描述1描述1描述1描述1描述1</List.Item>
                        <List.Item>描述1描述1描述1描述1描述1</List.Item>
                      </List>
                    </Accordion.Panel>
                  </Accordion>
                } />
              </Card>
            ))}
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Job