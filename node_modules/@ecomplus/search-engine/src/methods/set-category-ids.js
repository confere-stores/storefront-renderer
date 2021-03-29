import commonFilter from './../lib/common-filter'

// handle filter by category IDs
export default (self, categoryIds) => commonFilter(self, 'categories', '_id', categoryIds, 'must')

/**
 * @method
 * @name EcomSearch#setCategoryIds
 * @description Defines list of category IDs to match on next search request,
 * filtering product results by category.
 *
 * @param {array<string>|null} categoryIds - List of category ObjectIDs (`_id`)
 * @returns {self}
 *
 * @example

// Set filter by category IDs for next search
search.setCategoryIds([ '5c7009fdc626be23430d4f82', '5c700a53c626be23430d4f88' ])

 * @example

// Remove filter by category IDs and run search request
search.setCategoryIds(null).fetch()

 */
