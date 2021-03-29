export default (self, field, occur = 'filter') => {
  // remove filter for current product field
  const filters = self.dsl.query && self.dsl.query.bool && self.dsl.query.bool[occur]
  if (Array.isArray(filters)) {
    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i]
      if ((filter.nested && filter.nested.path === field) || filter[Object.keys(filter)[0]][field]) {
        // remove filters array element
        filters.splice(i, 1)
        break
      }
    }
  }
  return self
}

/**
 * @method
 * @name EcomSearch#removeFilter
 * @description Remove a filter object on current
 * Query DSL filters list for next search request.
 *
 * @param {string} field - A valid
 * [item field]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
 * with dot notation for nested properties
 * @param {string} [occur='filter'] - Occurrence type for
 * [boolean query]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html}
 * @returns {self}
 *
 * @example

// Remove filter by brand IDs and all specification filters
search.removeFilter('brands._id').removeFilter('specs')

 * @example

// Remove filter by category names and run seach request
search.removeFilter('categories.name').fetch()

 */
