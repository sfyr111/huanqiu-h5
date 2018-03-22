import React from 'react'
import { Route } from 'react-router-dom'
import { SearchBar } from 'antd-mobile'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import AdvisoryDetail from '../advisory-detail/advisory-detail'

import './advisory.styl'

class Advisory extends React.Component {
  constructor() {
    super()
    this.state = {
      placeholder: '搜索',
    }
  }

  onFocusHandle = () => this.setState({ placeholder: '' })

  onBlurHandle = () => this.setState({ placeholder: '搜索' })

  onClickHandle = () => {
    this.props.history.push('/advisory/1')
  }

  render() {
    const { pathname } = this.props.location

    return (
      <div id="advisory" className='main'>
        <div className="advisory-content">
        <section className='search-bar' style={{ display: !pathname.endsWith('/advisory') ? 'none' : ''}}>
          <SearchBar placeholder={this.state.placeholder} onFocus={this.onFocusHandle} onBlur={this.onBlurHandle} />
        </section>
          <div className="list">
            <ul className="list-content">
              {new Array(20).fill('').map((item, index) => (
                <li onClick={this.onClickHandle} key={index}>
                  <section className='thumb'>
                    <img src='http://temp.im/754x754' />
                  </section>
                  <section className='extra'>
                    <p>标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                    <time>2012-12-12</time>
                  </section>
                </li>
              ))}
            </ul>
          </div>
          <ReactCSSTransitionGroup
            component='div'
            transitionName="slide-to-left"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {!pathname.endsWith('/advisory') ? <Route key='detail' location={this.props.location} path='/advisory/:id' component={AdvisoryDetail} /> : null}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Advisory