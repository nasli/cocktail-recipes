import * as types from './types'
import * as api from '../../webservices'

function updateFetching (value) {
  return {
    type: types.COCKTAIL_DETAIL_UPDATE_FETCHING,
    value
  }
}

function updateCocktailDetail (cocktailDetail) {
  return {
    type: types.COCKTAIL_DETAIL_UPDATE,
    value: cocktailDetail
  }
}

export function fetchCocktailDetail () {
  return function (dispatch, getState) {
    dispatch(updateFetching(true))
    const cocktail = getState().cocktails.selected
    api
      .fetchCocktailById(cocktail.idDrink)
      .then(res => {
        const cocktailDetail = res.data.drinks[0]

        dispatch(updateCocktailDetail(cocktailDetail))
      })
      .catch(err => {
        console.error('fetchCocktailDetail err: ', err)
      })
      .finally(() => dispatch(updateFetching(false)))
  }
}
