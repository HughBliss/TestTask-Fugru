import { REQUEST_SDATA, SUCCES_SDATA, ERROR_SDATA } from '../../const'
import { fetchData } from '../../apiRequests'

export function getDataFromApi (rows) {
  return (dispatch) => {
    dispatch({
      type: REQUEST_SDATA
    })
    fetchData({ rows }).then(data => {
      dispatch({
        type: SUCCES_SDATA,
        data
      })
    }).catch(_ => {
      dispatch({
        type: ERROR_SDATA
      })
    })
  }
}
