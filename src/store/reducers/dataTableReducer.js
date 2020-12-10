import { ERROR_DATA, REQUEST_DATA, SORT_TABLE, SUCCESS_DATA } from '../consts'

const initialState = {
  data: [],
  sortingBy: 'id',
  isLoading: false
}

const dynamicSort = (field) => {
  let sortOrder = 1
  if (field[0] === '-') {
    sortOrder = -1
    field = field.substr(1)
  }
  return (a, b) => {
    const result = (a[field] < b[field]) ? -1 : (a[field] > b[field]) ? 1 : 0
    return result * sortOrder
  }
}

export const dataTableReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case REQUEST_DATA:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS_DATA:
      return {
        ...state,
        data: data.sort(dynamicSort(state.sortingBy)),
        isLoading: false
      }
    case ERROR_DATA:
      return {
        sortingBy: 'id',
        data: [],
        isLoading: false
      }
    case SORT_TABLE:
      return {
        ...state,
        sortingBy: data,
        data: state.data.slice().sort(dynamicSort(data))
      }
    default:
      return {
        sortingBy: 'id',
        data: [],
        isLoading: false
      }
  }
}
