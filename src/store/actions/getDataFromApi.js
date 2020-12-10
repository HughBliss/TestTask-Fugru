import { REQUEST_DATA, SUCCESS_DATA, ERROR_DATA } from '../consts'
import { fetchData } from '../../apiRequests'

export const getDataFromApi = (rows) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_DATA
    })
    fetchData({ rows }).then(data => {
      dispatch({
        type: SUCCESS_DATA,
        data: data.map(row => ({
          ...row,
          isValid: true
        }))
      })
    }).catch(_ => {
      dispatch({
        type: ERROR_DATA
      })
    })
  }
}
