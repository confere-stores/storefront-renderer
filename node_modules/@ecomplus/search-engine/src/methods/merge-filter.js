import * as merge from 'lodash.merge'

const getNestedRule = (filter, occur) => {
  // treat nested query object
  // look './set-specs.js' as example
  const query = filter && filter.nested && filter.nested.query
  if (query && query.bool && Array.isArray(query.bool[occur])) {
    return query.bool[occur].find(rule => rule.term)
  }
  return undefined
}

export default (self, filter, occur = 'filter') => {
  const type = Object.keys(filter)[0]
  // merge general filter to current Query DSL
  // ensure query.bool.filter is array
  merge(self.dsl, {
    query: {
      bool: {
        [occur]: []
      }
    }
  })
  const filters = self.dsl.query.bool[occur]

  // check if new filter object should be added or replace other
  let rule
  switch (type) {
    case 'terms':
    case 'term':
    case 'multi_match':
    case 'range':
      if (typeof filter[type] === 'object' && filter[type] !== null) {
        const field = Object.keys(filter[type])[0]
        for (let i = 0; i < filters.length; i++) {
          // check if is the same field
          const rule = filters[i][Object.keys(filters[i])[0]]
          if (typeof rule === 'object' && rule !== null && Object.keys(rule)[0] === field) {
            // replace filter object
            filters[i] = filter
            return self
          }
        }
      }
      break

    case 'nested':
      rule = getNestedRule(filter, occur)
      if (rule) {
        // check field and key value for nested object filter
        const field = Object.keys(rule.term)[0]
        const key = rule.term[field]
        // run root filters list first
        for (let i = 0; i < filters.length; i++) {
          const rule = getNestedRule(filters[i], occur)
          // check field and key value
          if (rule && rule.term[field] === key) {
            // replace filter object
            filters[i] = filter
            return self
          }
        }
      }
  }

  // add new filter object to current list
  filters.push(filter)
  return self
}

/**
 * @method
 * @name EcomSearch#mergeFilter
 * @description Add/update a filter object on current
 * Query DSL filters list for next search request.
 *
 * @param {object} filter - A valid object for Query DSL
 * [filter context]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html}
 * @param {string} [occur='filter'] - Occurrence type for
 * [boolean query]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html}
 * @returns {self}
 *
 * @example

// Add custom filter by product quantity
search.mergeFilter({
  term: {
    quantity: 0
  }
})

 * @example

// Set filter by SKUs and run search request
const filter = { terms: { sku: ['nb-apl-1203', 'hd-csr-303'] } }
search.mergeFilter(filter).fetch()

 */
