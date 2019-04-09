import * as types from './types'

const initialState = {
  list: [],
  total: 0,
  isFetching: false,
  selected: null,
  offset: 0
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

    case types.COCKTAIL_UPDATE_DETAIL:
      return {
        ...state,
        cocktail: action.value
      }

    case types.COCKTAILS_UPDATE_OFFSET:
      return {
        ...state,
        offset: action.value
      }

    default:
      return state
  }
}
