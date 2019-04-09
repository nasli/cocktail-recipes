import * as types from './types'

const initialState = {
  favoriteList: [],
  favoriteTotal: 0
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.COCKTAILS_UPDATE_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.favoriteList,
        favoriteTotal: action.favoriteTotal
      }

    default:
      return state
  }
}
