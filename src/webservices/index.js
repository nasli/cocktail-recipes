import axios from 'axios'
import { BASE_URL } from '../config/api'
import qs from 'qs'

export function configureAxios () {
  axios.defaults.baseURL = BASE_URL
  axios.defaults.headers.post['Content-Type'] = 'application/json'
}

export function fetchCocktailsByFilter (params) {
  const url = '/filter.php?' + qs.stringify(params, { skipNulls: true })
  return axios.get(url)
}

// export function fetchCocktailsByFilterAlcoholic (params) {
//   const url = `/filter.php?` + qs.stringify(params, { skipNulls: true })
//   return axios.get(url)
// }

export function fetchCocktailById (cocktailId) {
  const url = `/lookup.php?i=` + cocktailId
  return axios.get(url)
}
