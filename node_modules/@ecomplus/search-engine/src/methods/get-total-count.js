export default (self, result) => {
  // return total matched items
  if (!result) {
    result = self.result || {}
  }
  return result.hits ? result.hits.total : undefined
}

/**
 * @method
 * @name EcomSearch#getTotalCount
 * @description Get total number of products found from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {number}
 *
 * @example

// Run search request and count total items matched
search.fetch().then(() => console.log(search.getTotalCount()))

 * @example

// You can also pass search result object as param
try {
  const result = await search.fetch()
  if (search.getTotalCount(result) > 0) {
    // Listing result items as logic example here
    console.log(search.getItems(result))
  }
} catch (error) {
  console.error(error)
}

 */
