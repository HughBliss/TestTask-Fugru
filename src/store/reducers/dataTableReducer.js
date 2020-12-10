import { ERROR_DATA, REQUEST_DATA, SEARCH, SORT_TABLE, SUCCESS_DATA, tableSortingFields } from '../consts'

const tableFieldsArray = Object.keys(tableSortingFields)

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
    case SEARCH:
      return {
        ...state,
        data: state.data.map(row => {
          let isValid = false
          for (let i = 0; i < tableFieldsArray.length; i++) {
            if (row[tableFieldsArray[i]] && String(row[tableFieldsArray[i]]).search(data) !== -1) {
              isValid = true
              break
            }
          }
          return {
            ...row,
            isValid
          }
        })
      }
    default:
      return {
        sortingBy: 'id',
        data: [],
        isLoading: false
      }
  }
}
