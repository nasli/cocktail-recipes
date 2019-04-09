import * as types from './types'
import * as api from '../../webservices'

const LIMIT = 10

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

export function initCocktailsList () {
  return function (dispatch, getState) {
    dispatch(updateCocktailsList([], 0))
    dispatch(updateOffset(0))
    dispatch(fetchCocktailsList())
  }
}

function updateCocktailsList (list, total) {
  return {
    type: types.COCKTAILS_UPDATE_LIST,
    list: list,
    total
  }
}

function updateOffset (value) {
  return {
    type: types.COCKTAILS_UPDATE_OFFSET,
    value
  }
}

function fetchCocktailsList () {
  return function (dispatch, getState) {
    dispatch(updateFetching(true))
    const { offset, list } = getState().cocktails

    const params = { c: 'Cocktail' }
    api
      .fetchCocktailsByFilter(params)
      .then(res => {
        // console.log('RES API: ', res)
        const total = res.data.drinks.length
        // Forced slice to implement pagination in results
        const newList = [
          ...list,
          ...res.data.drinks.slice(offset, offset + LIMIT)
        ]
        // console.log('NEW LIST: ', newList)

        dispatch(updateCocktailsList(newList, total))
      })
      .catch(err => {
        console.error('fetchCocktails err: ', err)
      })
      .finally(() => dispatch(updateFetching(false)))
  }
}

export function updateCocktailsListOffset () {
  return function (dispatch, getState) {
    const offset = getState().cocktails.offset + LIMIT
    dispatch(updateOffset(offset))
    dispatch(fetchCocktailsList())
  }
}
