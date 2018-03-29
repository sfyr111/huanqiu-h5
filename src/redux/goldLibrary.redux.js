import api from '../common/api/service'

const GET_ALL_GOLD_LIBRARY = 'GET_ALL_GOLD_LIBRARY'

const initState = {
  goldLibraryList: []
}

export function goldLibrary(state = initState, action) {
  switch (action.type) {
    case GET_ALL_GOLD_LIBRARY: {
      return { ...state, goldLibraryList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllGoldLibraryAction(list) {
  return { type: GET_ALL_GOLD_LIBRARY, payload: list }
}


export function getAllGoldLibrary() {
  return (dispatch) => {
    api.get('/i/prod_list.htm?type=T0000')
      .then(res => {
        dispatch(getAllGoldLibraryAction(res.obj.dataList))
      })
  }
}
