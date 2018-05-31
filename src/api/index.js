import 'whatwg-fetch'
import { isObject } from 'lodash'

export const JsonApiRequest = (url, options = {}) => {
  return fetch(url, options)
    .then(function(response) {
      if (response.status >= 400) {
        return new Error('Bad response from server')
      }
      return response.text()
    })
    .then(data => (isObject(data) ? data : JSON.parse(data)))
    .catch(err => {
      return { response: err }
    })
}