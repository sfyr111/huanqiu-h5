import api from '../common/api/service'

const GET_ALL_OVERSEAS = 'GET_ALL_OVERSEAS'

const initState = {
  overseasList: [],
}

export function overseas(state = initState, action) {
  switch (action.type) {
    case GET_ALL_OVERSEAS: {
      return { ...state, overseasList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllOverseasAction(list) {
  return { type: GET_ALL_OVERSEAS, payload: list }
}


export function getAllOverseas() {
  return (dispatch) => {
    api.get('/i/prod_list.htm?type=T0002')
      .then(res => {
        dispatch(getAllOverseasAction(res.obj.dataList))
      })
  }
}
