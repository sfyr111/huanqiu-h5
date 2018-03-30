import React from 'react'
import { connect } from 'react-redux'

@connect(
  state => state.advisory
)
class AdvisoryDetail extends React.Component {

  componentDidMount() {}

  render() {
    const { id } = this.props.match.params
    const [detail] = this.props.advisoryList.filter(item => item.id === Number(id))

    return (
      <div style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0', height: '100vh', overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: detail.content }}>

      </div>
    )
  }
}

export default AdvisoryDetail