import { MOVE_TO_PAGE } from '../consts'

export const paginatorMoveToPage = (page) => {
  return dispatch => {
    dispatch({
      type: MOVE_TO_PAGE,
      data: page
    })
  }
}
