'use strict'

import axios from 'axios'
// import history from '../history'

// ACTION TYPES
// const WRITE_CATEGORY_NAME = 'WRITE_CATEGORY_NAME';
const GET_HABITS = 'GET_HABITS'

// ACTION CREATORS
// export function writeCategoryName (categoryName) {
//   const action = { type: WRITE_CATEGORY_NAME, categoryName };
//   return action;
// }

function getHabits(habits) {
  return ({ type: GET_HABITS, habits })
}

// THUNK CREATORS
export const fetchHabits = (userId, categoryId) => {
  return dispatch => {
      axios.get(`/api/users/${userId}/habits`, {})
        .then(res => res.data )
        .then( habits => {
          dispatch(getHabits(habits))
        })
        .catch(console.error)
  }
}

// REDUCER
export default function (state = [], action) {
  switch (action.type) {
    // case WRITE_CATEGORY_NAME:
    //   return action.categoryName;
    case GET_HABITS:
      return action.habits
    default:
      return state;
  }
}
