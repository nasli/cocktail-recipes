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
    const params = { c: 'Cocktail' }
    api
      .fetchCocktailsByFilter(params)
      .then(res => {
        console.log('RES API: ', res)
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

function updateCocktailDetail (cocktail) {
  return {
    type: types.COCKTAIL_UPDATE_DETAIL,
    value: cocktail
  }
}

export function fetchCocktailDetail () {
  return function (dispatch, getState) {
    const cocktail = getState().cocktails.selected
    console.log('PROPS COCKTAIL SELECTED: ', cocktail)

    api
      .fetchCocktailById(cocktail.idDrink)
      .then(res => {
        console.log('RES API detail selected: ', res)
        const cocktail = res.data.drinks

        dispatch(updateCocktailDetail(cocktail))
      })
      .catch(err => {
        console.error('fetchCocktailDetail err: ', err)
      })
      .finally(() => dispatch(updateFetching(false)))
  }
}
