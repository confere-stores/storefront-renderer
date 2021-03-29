import commonAggregation from './../lib/common-aggregation'

// get brand options from aggregations result
export default (self, result) => commonAggregation(result || self.result || {}, 'brands')

/**
 * @typedef {object} aggregation
 * @property {string} key - Brand/category/option name
 * @property {number} doc_count - How many items match with the respective key
 */

/**
 * @method
 * @name EcomSearch#getBrands
 * @description List brand options matched from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<aggregation>}
 *
 * @example

// Run search request and list brand aggregations
await search.fetch()
search.getBrands().forEach(aggBrand => {
  console.log(`we have ${aggBrand.doc_count} items with brand ${aggBrand.key}`)
})

 */
