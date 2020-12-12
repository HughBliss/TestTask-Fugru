import {
  ADD_NEW_USER,
  ERROR_DATA, MOVE_TO_PAGE,
  ONE_PAGE_SIZE,
  REQUEST_DATA,
  SEARCH,
  SET_PAGE_COUNT,
  SORT_TABLE,
  SUCCESS_DATA,
  tableSortingFields
} from '../consts'
import { dynamicSort } from '../../utils/dynamicSort'
import { splitArray } from '../../utils/splitArray'
import { checkRowValidForSearch } from '../../utils/checkRowValidForSearch'

const tableFieldsArray = Object.keys(tableSortingFields)

const initialState = {
  data: [],
  sortingBy: 'id',
  isLoading: false,
  currentPage: 0,
  pageCount: 1
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
        data: data
          .slice()
          .sort(dynamicSort(state.sortingBy))
          .reduce(splitArray(ONE_PAGE_SIZE), []),
        isLoading: false
      }
    case SET_PAGE_COUNT:
      return {
        ...state,
        pageCount: state.data.length
      }
    case ADD_NEW_USER:
      return {
        ...state,
        data: [
          data,
          ...state.data.flat()
        ].reduce(splitArray(ONE_PAGE_SIZE), [])
      }
    case SORT_TABLE:
      return {
        ...state,
        sortingBy: data,
        data: state.data
          .flat()
          .slice()
          .sort(dynamicSort(data))
          .reduce(splitArray(ONE_PAGE_SIZE), [])
      }
    case SEARCH:
      return {
        ...state,
        data: state.data
          .flat()
          .slice()
          .map(checkRowValidForSearch(tableFieldsArray, data))
          .sort(dynamicSort('-isValid'))
          .reduce(splitArray(ONE_PAGE_SIZE), [])
      }
    case MOVE_TO_PAGE:
      return {
        ...state,
        currentPage: data
      }
    case ERROR_DATA:
      return initialState
    default:
      return initialState
  }
}
