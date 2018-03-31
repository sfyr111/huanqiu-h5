import React from 'react'
import { Card, Accordion, List } from 'antd-mobile'
import { WeixinTitle } from 'react-weixin-title'
import { connect } from 'react-redux'
import { getAllJob } from '../../redux/job.redux'

import './job.styl'

@connect(
  state => state.job,
  { getAllJob }
)
class Job extends React.Component {

  componentDidMount() {
    const { getAllJob } = this.props
    getAllJob()
  }

  render() {
    const { jobList } = this.props

    return (
      <WeixinTitle title='招聘' src=''>
        <div id="job" className="main">
          <div className="job-content">
            {jobList.length > 0 ? jobList.map((item, index) => (
              <Card key={index}>
                <Card.Header
                  title={item.title + item.region}
                />
                <Card.Body>
                  <p>{item.brief}</p>
                  {item.remarks.split('\n').slice(0, -1).map(v => <p key={v} style={{ fontSize: 12 }}>{v}</p>)}
                </Card.Body>
                <Card.Footer content={
                  <Accordion>
                    <Accordion.Panel header="职位描述">
                      <List>
                        {item.requirement.split('\n').slice(0, -1).map(v => <List.Item key={v}>{v}</List.Item>)}
                      </List>
                    </Accordion.Panel>
                  </Accordion>
                } />
              </Card>
            )) : <section style={{
                            display: 'flex',
                            height: '100vh',
                            justifyContent: 'center',
                            alignItems: 'center'}}
            ><span>暂无招聘信息</span></section>}
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Job