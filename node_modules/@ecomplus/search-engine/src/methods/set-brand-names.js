import commonFilter from './../lib/common-filter'

// handle filter by brand names
export default (self, brandNames) => commonFilter(self, 'brands', 'name', brandNames)

/**
 * @method
 * @name EcomSearch#setBrandNames
 * @description Defines list of brand names to match on next search request,
 * filtering product results by brand.
 *
 * @param {array<string>|null} brandNames - List of brand names
 * @returns {self}
 *
 * @example

// Set filter by brands and run search request
search.setBrandNames([ 'Corsair', 'Apple' ]).fetch()

 * @example

// Remove filter by brand names
search.setBrandNames(null)

 */
