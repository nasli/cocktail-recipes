import * as types from './types'

const initialState = {
  cocktailDetail: null,
  isFetching: false
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.COCKTAIL_DETAIL_UPDATE:
      return {
        ...state,
        cocktailDetail: action.value
      }

    case types.COCKTAIL_DETAIL_UPDATE_FETCHING:
      return {
        ...state,
        isFetching: action.value
      }

    default:
      return state
  }
}
