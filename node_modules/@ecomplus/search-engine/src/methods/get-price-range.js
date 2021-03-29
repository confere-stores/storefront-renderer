export default (self, result) => {
  // get price aggregations from result object
  if (!result) {
    result = self.result || {}
  }
  const { aggregations } = result
  return aggregations
    ? {
      min: (aggregations.min_price && aggregations.min_price.value) || 0,
      avg: (aggregations.avg_price && aggregations.avg_price.value) || 0,
      max: (aggregations.max_price && aggregations.max_price.value) || 0
    }
    : {
      min: 0,
      avg: 0,
      max: 0
    }
}

/**
 * @method
 * @name EcomSearch#getPriceRange
 * @description Get minimum, maximum and average item prices
 * from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {prices}
 *
 * @example

// Run search request and get resultant price range
search.fetch().then(() => {
  const { min, avg, max } = search.getPriceRange()
  console.log(`prices => min: ${min}; max: ${max}; avg: ${avg}`)
})

 */
