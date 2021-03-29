export default (self, gridId, textOptions) => {
  // nested ELS object
  // http://nocf-www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-nested-query.html
  if (Array.isArray(textOptions)) {
    // add/update filter
    return self.mergeFilter({
      nested: {
        path: 'specs',
        query: {
          bool: {
            filter: [{
              term: {
                'specs.grid': gridId
              }
            }, {
              terms: {
                'specs.text': textOptions
              }
            }]
          }
        }
      }
    })
  }

  if (textOptions === null) {
    // remove filter for current grid
    const filters = self.dsl.query && self.dsl.query.bool && self.dsl.query.bool.filter
    if (Array.isArray(filters)) {
      for (let i = 0; i < filters.length; i++) {
        if (filters[i] && filters[i].nested) {
          const { path, query } = filters[i].nested
          if (path === 'specs' && query && query.bool) {
            // search from grid ID on nested filters
            const rules = query.bool.filter
            if (Array.isArray(rules) && rules.find(({ term }) => term && term['specs.grid'] === gridId)) {
              // grid ID found
              // remove filters array element
              filters.splice(i, 1)
              return self
            }
          }
        }
      }
    }
  }

  return self
}

/**
 * @method
 * @name EcomSearch#setSpec
 * @description Add, update or remove search filter
 * by product specification based on grid ID and list of text options to match.
 *
 * @param {string} gridId - Grid ID such as 'size'
 * @param {array|null} textOptions - List of chosen options such as `['M', 'G']`
 * or null to clear current grid filter
 * @returns {self}
 *
 * @example

// Set filter by size specification and run search request
search.setSpec('size', ['M', 'G']).fetch()
// Update size options and search again
search.setSpec('size', ['P', 'M', 'G']).fetch()

 * @example

// Remove filter by size for next search
search.setSpec('size', null)

 */
