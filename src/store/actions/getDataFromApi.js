import { REQUEST_DATA, SUCCESS_DATA, ERROR_DATA } from '../consts'
import { fetchData } from '../../apiRequests'

export function getDataFromApi (rows) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_DATA
    })
    fetchData({ rows }).then(data => {
      dispatch({
        type: SUCCESS_DATA,
        data
      })
    }).catch(_ => {
      dispatch({
        type: ERROR_DATA
      })
    })
  }
}
