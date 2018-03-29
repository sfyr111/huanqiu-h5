import api from '../common/api/service'

const GET_ALL_LECTURE_HALL = 'GET_ALL_LECTURE_HALL'

const initState = {
  lectureHallList: [],
}

export function lectureHall(state = initState, action) {
  switch (action.type) {
    case GET_ALL_LECTURE_HALL: {
      return { ...state, lectureHallList: [...action.payload] }
    }
    default: {
      return state
    }
  }
}

function getAllLectureHallAction(list) {
  return { type: GET_ALL_LECTURE_HALL, payload: list }
}


export function getAllLectureHall() {
  return (dispatch) => {
    api.get('/i/prod_list.htm?type=T0004')
      .then(res => {
        if (res.status === 200) dispatch(getAllLectureHallAction(res.data.obj.dataList))
        else alert('ERROR')
      })
  }
}
