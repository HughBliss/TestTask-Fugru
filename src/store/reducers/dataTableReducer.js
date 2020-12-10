import { ERROR_DATA, REQUEST_DATA, SUCCESS_DATA } from '../consts'

const initialState = {
  data: [],
  isLoading: false
}

export const dataTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_DATA:
      return {
        ...state,
        data: action.data,
        isLoading: false
      }
    case ERROR_DATA:
      return {
        ...state,
        data: [
          {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            phone: null,
            address: null
          }
        ],
        isLoading: false
      }
    default:
      return {
        data: [
          {
            id: null,
            email: null,
            firstName: null,
            lastName: null,
            phone: null,
            address: null
          }
        ]
      }
  }
}
