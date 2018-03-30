import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { topic } from './redux/topic.redux'
import { channel } from './redux/channel.redux'

import { goldLibrary } from './redux/goldLibrary.redux'
import { goldAllusion } from './redux/goldAllusion.redux'
import { overseas } from './redux/overseas.redux'
import { patentLibrary } from './redux/patentLibrary.redux'
import { lectureHall } from './redux/lectureHall.redux'
import { union } from './redux/union.redux'
import { advisory } from './redux/advisory.redux'
import { job } from './redux/job.redux'

import { routerReducer } from 'react-router-redux'


export default combineReducers({ router: routerReducer, user, topic, channel, goldLibrary, goldAllusion, overseas, patentLibrary, lectureHall, union, advisory, job })
