export default (self, page = 1) => {
  self.dsl.from = self.dsl.size * (page - 1)
  return self
}

/**
 * @method
 * @name EcomSearch#setPageNumber
 * @description Defines next page number for
 * search request (paginate results) starting from 1.
 *
 * @param {number} [page=1] - Integer page number
 * @returns {self}
 *
 * @example

// Configure to get second page of results and run search request
search.setPageNumber(2).fetch()

* @example

// Set back to page number 1
// It's the default preseted page number
search.setPageNumber()

 */
