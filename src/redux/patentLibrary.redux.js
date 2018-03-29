import api from '../common/api/service'

const GET_ALL_PATENT_LIBRARY = 'GET_ALL_PATENT_LIBRARY'

const initState = {
  patentLibraryList: [],
}

export function patentLibrary(state = initState, action) {
  switch (action.type) {
    case GET_ALL_PATENT_LIBRARY: {
      return { ...state, patentLibraryList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllPatentLibraryAction(list) {
  return { type: GET_ALL_PATENT_LIBRARY, payload: list }
}


export function getAllPatentLibrary() {
  return (dispatch) => {
    api.get('/i/prod_list.htm?type=T0003')
      .then(res => {
        dispatch(getAllPatentLibraryAction(res.obj.dataList))
      })
  }
}
