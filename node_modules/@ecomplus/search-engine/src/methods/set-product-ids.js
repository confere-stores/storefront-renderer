import commonFilter from './../lib/common-filter'

// handle filter by product IDs
export default (self, productIds) => commonFilter(self, null, '_id', productIds)

/**
 * @method
 * @name EcomSearch#setProductIds
 * @description Defines list of product IDs to match on next search request.
 *
 * @param {array<string>|null} productIds - List of product ObjectIDs (`_id`)
 * @returns {self}
 *
 * @example

// Set filter by ID and run search request
search.setProductIds([ '5c703c40c626be23430d5033' ]).fetch()

 * @example

// Remove filter by product ID
search.setProductIds(null)

 */
