import React from 'react'
import { Route } from 'react-router-dom'
import { SearchBar } from 'antd-mobile'
// import { CSSTransitionGroup } from 'react-transition-group'
import { WeixinTitle } from 'react-weixin-title'

import { connect } from 'react-redux'
import { getAllAdvisory } from '../../redux/advisory.redux'

import AdvisoryDetail from '../advisory-detail/advisory-detail'

import './advisory.styl'

@connect(
  state => state.advisory,
  { getAllAdvisory }
)
class Advisory extends React.Component {
  constructor() {
    super()
    this.state = {
      placeholder: '搜索',
    }
  }

  componentDidMount() {
    this.searchKeyWord()
  }

  searchKeyWord = (keyWord = '') => {
    const { getAllAdvisory } = this.props
    getAllAdvisory(keyWord)
  }


  onFocusHandle = () => this.setState({ placeholder: '' })

  onBlurHandle = () => this.setState({ placeholder: '搜索' })

  render() {
    const { pathname } = this.props.location

    const { advisoryList } = this.props

    return (
      <WeixinTitle title='咨询' src=''>
        <div id="advisory" className='main'>
          <div className="advisory-content">
          <section className='search-bar' style={{ display: !pathname.endsWith('/advisory') ? 'none' : ''}}>
            <SearchBar placeholder={this.state.placeholder} onFocus={this.onFocusHandle} onBlur={this.onBlurHandle} ref={ref => this.search = ref} onSubmit={() => this.searchKeyWord(this.search.state.value)} />
          </section>
            <div className="list">
              <ul className="list-content">
                {advisoryList.map((item, index) => (
                  <li onClick={() =>  this.props.history.push(`/advisory/${item.id}`)} key={item.id}>
                    <section className='thumb'>
                      <img src={item.summary} />
                    </section>
                    <section className='extra'>
                      <p>{item.title}</p>
                      <time>{item.time}</time>
                    </section>
                  </li>
                ))}
              </ul>
            </div>
            {/*<CSSTransitionGroup*/}
              {/*component='div'*/}
              {/*transitionName="slide-to-left"*/}
              {/*transitionEnterTimeout={300}*/}
              {/*transitionLeaveTimeout={300}*/}
            {/*>*/}
              {!pathname.endsWith('/advisory') ? <Route key='detail' location={this.props.location} path='/advisory/:id' component={AdvisoryDetail} /> : null}
            {/*</CSSTransitionGroup>*/}
          </div>
        </div>
      </WeixinTitle>
    )
  }
}

export default Advisory