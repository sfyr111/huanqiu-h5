import React from 'react'

class AdvisoryDetail extends React.Component {

  componentDidMount() {
    console.log(this.props.match.params.id)
  }

  render() {

    return (
      <h1 style={{ background: 'red', position: 'fixed', left: '0', right: '0', top: '0', bottom: '0' }}>AdvisoryDetail</h1>
    )
  }
}

export default AdvisoryDetail