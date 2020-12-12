import { ADD_NEW_USER } from '../consts'

export const addNewUser = (userDto) => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_USER,
      data: userDto
    })
  }
}
