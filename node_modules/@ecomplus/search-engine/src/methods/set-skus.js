import commonFilter from './../lib/common-filter'

// handle filter by product SKUs
export default (self, skus) => commonFilter(self, null, 'sku', skus)

/**
 * @method
 * @name EcomSearch#setSkus
 * @description Defines list of product SKUs to match on next search request.
 *
 * @param {array<string>|null} skus - List of product SKUs
 * @returns {self}
 *
 * @example

// Set filter by SKUs for next search
search.setSkus(['nb-apl-1203', 'hd-csr-303'])

 * @example

// Remove filter by SKU and run search request
search.setSkus(null).fetch()

 */
