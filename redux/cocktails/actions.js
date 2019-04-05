import * as types from './types'
import * as api from '../../webservices'

function updateCocktailsList (list, total) {
  return {
    type: types.COCKTAILS_UPDATE_LIST,
    list: list,
    total
  }
}

export function updateCocktailSelected (house) {
  const action = {
    type: types.COCKTAILS_UPDATE_SELECTED,
    value: house
  }
  return action
}

function updateFetching (value) {
  return {
    type: types.COCKTAILS_UPDATE_FETCHING,
    value
  }
}

export function fetchCocktailsList () {
  return function (dispatch, getState) {
    dispatch(updateFetching(true))
    api
      .fetchCocktails()
      .then(res => {
        const list = res.data.drinks
        const total = list.length

        dispatch(updateCocktailsList(list, total))
      })
      .catch(err => {
        console.error('fetchCocktails err: ', err)
      })
      .finally(() => dispatch(updateFetching(false)))
  }
}
