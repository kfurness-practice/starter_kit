import 'whatwg-fetch'; // assures this polyfill will work in browsers that do not have fetch yet
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

// this function is simple due to the reusable boilerplate below! wahoo
export function getUsers() {
  return get('users')
}

// these functions are private
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  console.log(error) // eslint-disable-line no-console
}
