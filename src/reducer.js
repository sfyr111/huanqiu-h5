import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { topic } from './redux/topic.redux'
import { channel } from './redux/channel.redux'

import { routerReducer } from 'react-router-redux'


export default combineReducers({ router: routerReducer, user, topic, channel })
