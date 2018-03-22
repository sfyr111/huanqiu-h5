import React from 'react'
import PropTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

@withRouter
@connect()
class NavLink extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  render () {

    const navList = this.props.data.filter(v => !v.hide)
    const { pathname } = this.props.location

    return (
      <TabBar>
        {navList.map(v => (
          <TabBar.Item
            key={v.path}
            title={v.text}
            icon={require(`./img/${v.i}.png`)}
            selectedIcon={require(`./img/${v.i}-active.png`)}
            selected={pathname.indexOf(v.path) > -1}
            onPress={() => this.props.history.push(v.path)}
          />
        ))}
      </TabBar>
    )
  }
}

export default NavLink
