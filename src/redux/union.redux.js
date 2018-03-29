import api from '../common/api/service'

const GET_ALL_UNION = 'GET_ALL_UNION'

const initState = {
  unionList: [],
}

export function union(state = initState, action) {
  switch (action.type) {
    case GET_ALL_UNION: {
      return { ...state, unionList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllUnionAction(list) {
  return { type: GET_ALL_UNION, payload: list }
}


export function getAllUnion() {
  return (dispatch) => {
    api.get('/i/prod_list.htm?type=T04')
      .then(res => {
        dispatch(getAllUnionAction(res.obj.dataList))
      })
  }
}
