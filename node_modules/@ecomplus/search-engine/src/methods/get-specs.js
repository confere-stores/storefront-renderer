export default (self, result) => {
  // get specs nested aggregations from result object
  if (!result) {
    result = self.result || {}
  }
  if (result.aggregations) {
    const { specs } = result.aggregations
    if (specs && specs.grid && Array.isArray(specs.grid.buckets)) {
      // map nested buckets
      return specs.grid.buckets.map(bucket => ({
        key: bucket.key,
        doc_count: bucket.doc_count,
        options: (bucket.text && bucket.text.buckets) || []
      }))
    }
  }
  return []
}

/**
 * @typedef {object} spec
 * @property {string} key - Specification grid ID
 * @property {number} doc_count - How many items has the respective grid
 * @property {array<aggregation>} options - List of matched grid options
 */

/**
 * @method
 * @name EcomSearch#getSpecs
 * @description List specification grids and options
 * matched from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<spec>}
 *
 * @example

// Run search request and list spec options
await search.fetch()
search.getSpecs().forEach(aggSpec => {
  console.log(`${aggSpec.doc_count} items with grid ${aggSpec.key} and the following options:`)
  aggSpec.options.forEach(aggOption => {
    console.log(`${aggOption.key} (${aggOption.doc_count})`)
  })
})

 */
