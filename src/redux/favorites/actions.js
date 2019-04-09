import { Alert } from 'react-native'
import * as types from './types'

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
    const { favoriteList } = getState().favorites
    const newList = [...favoriteList, cocktail]
    const total = newList.length
    dispatch(updateFavoriteCocktails(newList, total))
    Alert.alert('¡Added!', `New cocktail added, total:${total}`)
  }
}

export function getCocktailsFavoriteList () {
  return function (dispatch, getState) {
    const { favoriteList } = getState().favorites
    const total = favoriteList.length
    dispatch(updateFavoriteCocktails(favoriteList, total))
  }
}
