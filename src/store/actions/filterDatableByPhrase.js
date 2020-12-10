import { SEARCH } from '../consts'

export const filterDatableByPhrase = (phrase) => {
  return dispatch => {
    dispatch({
      type: SEARCH,
      data: phrase
    })
  }
}
