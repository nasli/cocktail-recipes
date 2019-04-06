import * as types from './types'

const initialState = {
  list: [],
  total: 0,
  isFetching: false,
  selected: null
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.COCKTAILS_UPDATE_LIST:
      return {
        ...state,
        list: action.list,
        total: action.total
      }

    case types.COCKTAILS_UPDATE_FETCHING:
      return {
        ...state,
        isFetching: action.value
      }

    case types.COCKTAILS_UPDATE_SELECTED:
      return {
        ...state,
        selected: action.value
      }

    default:
      return state
  }
}
