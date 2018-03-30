import api from '../common/api/service'

const GET_ALL_ADVISORY = 'GET_ALL_ADVISORY'

const initState = {
  advisoryList: [],
}

export function advisory(state = initState, action) {
  switch (action.type) {
    case GET_ALL_ADVISORY: {
      return { ...state, advisoryList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllAdvisoryAction(list) {
  return { type: GET_ALL_ADVISORY, payload: list }
}


export function getAllAdvisory(keyWord = '') {
  return (dispatch) => {
    api.get(`/i/news_list.htm?title=${encodeURI(encodeURI(keyWord))}`)
      .then(res => {
        dispatch(getAllAdvisoryAction(res.obj.dataList))
      })
  }
}
