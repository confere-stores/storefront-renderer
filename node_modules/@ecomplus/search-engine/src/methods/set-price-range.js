export default (self, minPrice, maxPrice) => {
  // price ranges
  const price = {}
  if (typeof minPrice === 'number' && !isNaN(minPrice)) {
    price.gte = minPrice
  }
  if (typeof maxPrice === 'number' && !isNaN(maxPrice)) {
    price.lte = maxPrice
  }

  // add/update filter
  return self.mergeFilter({
    range: {
      price
    }
  })
}

/**
 * @method
 * @name EcomSearch#setPriceRange
 * @description Defines range filter to match with product price
 * for next search request.
 *
 * @param {number|null} minPrice - Minimun price value
 * @param {number|null} maxPrice - Maximun price value
 * @returns {self}
 *
 * @example

// Set filter by price range and run search request
search.setPriceRange(10, 22.5).fetch()

 * @example

// Remove filter by product price for next search
search.setPriceRange(null, null)

 */
