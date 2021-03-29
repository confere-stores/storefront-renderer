import commonFilter from './../lib/common-filter'

// handle filter by category names
export default (self, categoryNames) => commonFilter(self, 'categories', 'name', categoryNames, 'must')

/**
 * @method
 * @name EcomSearch#setCategoryNames
 * @description Defines list of category names to match on next search request,
 * filtering product results by category.
 *
 * @param {array<string>|null} categoryNames - List of category names
 * @returns {self}
 *
 * @example

// Set filter by categories and run search request
search.setCategoryNames([ 'Headset', 'Monitores Gamer' ]).fetch()

 * @example

// Remove filter by category names
search.setCategoryNames(null)

 */
