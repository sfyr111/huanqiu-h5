import React from 'react'
import { SearchBar, List } from 'antd-mobile'

import './advisory.styl'

const { Item } = List

class Advisory extends React.Component {
  constructor() {
    super()
    this.state = {
      placeholder: '搜索'
    }
  }

  onFocusHandle = () => this.setState({ placeholder: '' })

  onBlurHandle = () => this.setState({ placeholder: '搜索' })

  render() {
    return (
      <div id="advisory" className='main'>
        <div className="advisory-content">
        <section className='search-bar'>
          <SearchBar placeholder={this.state.placeholder} onFocus={this.onFocusHandle} onBlur={this.onBlurHandle} />
        </section>
          <div className="list">
            <ul className="list-content">
              {new Array(20).fill('').map(() => (
                <li>
                  <section className='thumb'>
                    <img src='http://temp.im/754x754' />
                  </section>
                  <section className='extra'>
                    <p>标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                    <timer>2012-12-12</timer>
                  </section>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Advisory