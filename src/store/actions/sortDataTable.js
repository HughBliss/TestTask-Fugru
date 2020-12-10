import { SORT_TABLE } from '../consts'

export const sortDataTable = (field) => {
  return dispatch => {
    dispatch({
      type: SORT_TABLE,
      data: field
    })
  }
}
