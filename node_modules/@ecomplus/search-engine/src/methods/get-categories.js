import commonAggregation from './../lib/common-aggregation'

// get category options from aggregations result
export default (self, result) => commonAggregation(result || self.result || {}, 'categories')

/**
 * @method
 * @name EcomSearch#getCategories
 * @description List category options matched from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<aggregation>}
 *
 * @example

// Run search request and list category aggregations
await search.fetch()
search.getCategories().forEach(aggCategory => {
  console.log(`we have ${aggCategory.doc_count} items with category ${aggCategory.key}`)
})

 */
