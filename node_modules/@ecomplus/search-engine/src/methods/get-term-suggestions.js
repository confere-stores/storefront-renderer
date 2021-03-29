export default (self, result) => {
  // get search term suggestions from result object
  if (!result) {
    result = self.result || {}
  }
  return (result.suggest && result.suggest.words) || []
}

/**
 * @typedef {object} suggest
 * @property {string} text - The original keyword from search term
 * @property {number} offset - Position where the keyword starts on search term
 * @property {number} length - Original keyword length
 * @property {array<suggestion>} options - Suggested options to replace original keyword
 */

/**
 * @typedef {object} suggestion
 * @property {string} text - The suggested keyword
 * @property {number} score - Match score up to 1
 * @property {number} freq - How many items match with the suggested keyword
 */

/**
 * @method
 * @name EcomSearch#getTermSuggestions
 * @description Get list of keyword suggestions based on current
 * search term from result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<suggest>}
 *
 * @example

// Run search request with wrong term and get suggestions
search.setSearchTerm('smartprone applo').fetch()
  .then(() => {
    search.getTermSuggestions().forEach(({ text, options }) => {
      const bestOption = options[0]
      // Check match score to suggest term replace
      if (bestOption.score >= 0.83) {
        console.log(`should replace '${text}' by '${bestOption.text}' on search term`)
      }
    })
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })

 */
