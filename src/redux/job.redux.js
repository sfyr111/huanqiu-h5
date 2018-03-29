import api from '../common/api/service'

const GET_ALL_JOB = 'GET_ALL_JOB'

const initState = {
  jobList: [],
}

export function job(state = initState, action) {
  switch (action.type) {
    case GET_ALL_JOB: {
      return { ...state, jobList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllJobAction(list) {
  return { type: GET_ALL_JOB, payload: list }
}


export function getAllJob() {
  return (dispatch) => {
    api.get('/i/recruitment.htm')
      .then(res => {
        dispatch(getAllJobAction(res.obj.dataList))
      })
  }
}
