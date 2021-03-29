import { search } from '@ecomplus/client'

export default (self, isSimpleSearch, axiosConfig) => {
  // mount axios req options for complex or simpĺe search
  const reqOptions = {
    url: '/items.json',
    axiosConfig
  }

  if (isSimpleSearch === true) {
    // https://www.elastic.co/guide/en/elasticsearch/reference/6.3/search-uri-request.html
    const { query } = self.dsl
    reqOptions.url += '?q='
    if (query && query.bool && Array.isArray(query.bool.filter)) {
      // parse query filters to string
      let queryString = ''
      query.bool.filter.forEach(({ term, terms }, i) => {
        if (i > 0) {
          queryString += ' AND '
        }
        const condition = term || terms
        if (condition) {
          const field = Object.keys(condition)[0]
          const value = condition[field]
          queryString += `${field}:${(Array.isArray(value) ? `("${value.join('" "')}")` : value)}`
        }
      })
      reqOptions.url += encodeURIComponent(queryString)
    }
    // handle pagination
    ;['from', 'size'].forEach(field => {
      if (self.dsl[field]) {
        reqOptions.url += `&${field}=${self.dsl[field]}`
      }
    })
  } else {
    reqOptions.method = 'post'
    reqOptions.data = self.dsl
    if (isSimpleSearch && !axiosConfig) {
      // fallback for old reference with `fetch(axiosConfig)`
      reqOptions.axiosConfig = isSimpleSearch
    }
  }

  // request Search API and return promise
  return search(reqOptions).then(({ data }) => {
    // save last result on instance
    self.result = data
    const { dsl, history, localStorage, storageKey } = self
    if (data.hits.total && dsl && dsl.suggest) {
      const { text } = dsl.suggest
      if (text) {
        // add search term to history
        const index = history.indexOf(text)
        if (index > -1) {
          // prevent duplicated term
          history.splice(index, 1)
        }
        history.unshift(text)
        if (localStorage && storageKey) {
          localStorage.setItem(storageKey, history.slice(0, 20).join('||'))
        }
      }
    }
    // resolving with response data
    return data
  })
}

/**
 * @typedef {object} result
 * @property {object} hits - Elasticsearch hits object
 * @property {number} hits.total - Total number of products found
 * @property {array<object>} hits.hits - List of resultant items
 * @property {object} aggregations - Elasticsearch aggregations results
 * @property {object} suggest - Search term suggestions object
 * @property {number} took - Request time in milliseconds
 */

/**
 * @method
 * @name EcomSearch#fetch
 * @description Send POST request to
 * [E-Com Plus Search API]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
 * and returns promise resolved with search result.
 *
 * @param {boolean} [isSimpleSearch=false] - Handle simple (and faster) search without sort and aggregations
 * @param {object} [axiosConfig] - Additional
 * [axios config]{@link https://github.com/axios/axios#request-config} object
 *
 * @returns {Promise<result|error>}
 *
 * @example

// Run search request
search.fetch()
  .then(result => {
    console.log(result.took)
    console.log(`${result.hits.total} items found:`)
    console.log(result.hits.hits)
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 */
