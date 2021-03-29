import commonFilter from './../lib/common-filter'

// handle filter by brand IDs
export default (self, brandIds) => commonFilter(self, 'brands', '_id', brandIds)

/**
 * @method
 * @name EcomSearch#setBrandIds
 * @description Defines list of brand IDs to match on next search request,
 * filtering product results by brand.
 *
 * @param {array<string>|null} brandIds - List of brand ObjectIDs (`_id`)
 * @returns {self}
 *
 * @example

// Set filter by brand ID and run search request
search.setBrandIds([ '5c703b35c626be23430d5030' ]).fetch()

 * @example

// Remove filter by brand ID
search.setBrandIds(null)

 */
