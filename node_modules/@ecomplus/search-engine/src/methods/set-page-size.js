export default (self, limit = 24) => {
  self.dsl.size = limit
  return self
}

/**
 * @method
 * @name EcomSearch#setPageSize
 * @description Defines maximum number of result items for next search request.
 *
 * @param {number} [limit=24] - Integer max result size
 * @returns {self}
 *
 * @example

// Set page size 20 and run search request
search.setPageSize(20).fetch()

* @example

// Set to 24 the maxium results for next search
// It's the default preseted page size
search.setPageSize()

 */
