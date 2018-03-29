import api from '../common/api/service'

const GET_ALL_GOLD_ALLUSION = 'GET_ALL_GOLD_ALLUSION'

const initState = {
  goldAllusionList: [],
}

export function goldAllusion(state = initState, action) {
  switch (action.type) {
    case GET_ALL_GOLD_ALLUSION: {
      return { ...state, goldAllusionList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllGoldAllusionAction(list) {
  return { type: GET_ALL_GOLD_ALLUSION, payload: list }
}


export function getAllGoldAllusion() {
  return (dispatch) => {
    api.get('/i/prod_list.htm?type=T0001')
      .then(res => {
        if (res.status === 200) dispatch(getAllGoldAllusionAction(res.data.obj.dataList))
        else alert('ERROR')
      })
  }
}
