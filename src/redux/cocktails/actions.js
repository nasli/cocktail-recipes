import { Actions } from 'react-native-router-flux'
import { Alert } from 'react-native'
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

function updateFavoriteCocktails (list, total) {
  return {
    type: types.COCKTAILS_UPDATE_FAVORITE_LIST,
    favoriteList: list,
    favoriteTotal: total
  }
}

export function addCocktail (cocktail) {
  return function (dispatch, getState) {
    if (!cocktail) {
      console.log('addCocktail err !cocktail ')
      return
    }
    const { favoriteList } = getState().cocktails
    const newList = [...favoriteList, cocktail]
    const total = newList.length
    dispatch(updateFavoriteCocktails(newList, total))
    Alert.alert('¡Added!', `New cocktail added, total:${total}`)
  }
}
