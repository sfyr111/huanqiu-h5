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
      <div style={{ background: '#fff', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0', height: '100vh', overflow: 'auto' }}>
        <h1 style={{
          padding: '0.853333rem 0.64rem',
          fontSize: '18px',
          fontWeight: '600',
        }}>{detail.title}</h1>
        <figure style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}><img height='200' src={detail.summary} alt=""/></figure>
        <main dangerouslySetInnerHTML={{ __html: detail.content }}></main>
      </div>
    )
  }
}

export default AdvisoryDetail