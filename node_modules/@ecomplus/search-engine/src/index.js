/*!
 * @ecomplus/search-engine
 * (c) E-Com Club <ti@e-com.club>
 * Released under the MIT License.
 */

/**
 * JS lib to handle products search with E-Com Plus stores.
 * {@link https://github.com/ecomclub/search-engine GitHub}
 *
 * @module @ecomplus/search-engine
 * @author E-Com Club <ti@e-com.club>
 * @return {@link EcomSearch}
 * @see EcomSearch
 *
 * @example
 * // ES import default
 * import EcomSearch from '@ecomplus/search-engine'
 *
 * @example
 * // With CommonJS
 * const EcomSearch = require('@ecomplus/search-engine')
 *
 * @example
 * <!-- Global `EcomSearch` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/search-engine/dist/ecom-search.var.min.js"></script>
 *
 * @example
 * <!-- Bundle from CDN with `ecomUtils`, `ecomClient`, `_.cloneDeep` and `_.merge` -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/search-engine/dist/ecom-search.bundle.min.js"></script>
 */

import { $ecomConfig } from '@ecomplus/utils'
import fetch from './methods/fetch'
import reset from './methods/reset'
import setSearchTerm from './methods/set-search-term'
import setPageNumber from './methods/set-page-number'
import setPageSize from './methods/set-page-size'
import setSortOrder from './methods/set-sort-order'
import mergeFilter from './methods/merge-filter'
import removeFilter from './methods/remove-filter'
import setSpec from './methods/set-spec'
import setCategoryNames from './methods/set-category-names'
import setCategoryIds from './methods/set-category-ids'
import setBrandNames from './methods/set-brand-names'
import setBrandIds from './methods/set-brand-ids'
import setSkus from './methods/set-skus'
import setProductIds from './methods/set-product-ids'
import setPriceRange from './methods/set-price-range'
import getItems from './methods/get-items'
import getTotalCount from './methods/get-total-count'
import getTermSuggestions from './methods/get-term-suggestions'
import getBrands from './methods/get-brands'
import getCategories from './methods/get-categories'
import getPriceRange from './methods/get-price-range'
import getSpecs from './methods/get-specs'

const _key = 'ecomSeachHistory'
const _storage = typeof window === 'object' && window.localStorage

export default function (storeId, storageKey = _key, localStorage = _storage) {
  const self = this

  /**
   * Respective Store ID number.
   * @name EcomSearch#storeId
   * @type {number}
   */
  this.storeId = storeId || $ecomConfig.get('store_id')

  /**
   * Item key to handle persistent [search history]{@link EcomSearch#history} data
   * with [localStorage]{@link EcomSearch#localStorage}.
   * @name EcomSearch#storageKey
   * @type {string|null}
   */
  this.storageKey = storageKey

  /**
   * [Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}.
   * @name EcomSearch#localStorage
   * @type {object}
   */
  this.localStorage = localStorage

  /**
   * Search terms history.
   * @name EcomSearch#history
   * @type {array<string>}
   */
  this.history = []

  /**
   * Current
   * [Query DSL]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html}
   * for [Search API]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
   * request body.
   * <br>
   * You can edit this object to manually set Query DSL properties,
   * or you can use instance methods listed below.
   * @name EcomSearch#dsl
   * @type {object}
   */
  this.dsl = {}

  /**
   * Last search result object obtained with the
   * [fetch method]{@link EcomSearch#fetch}.
   * @name EcomSearch#result
   * @type {result|undefined}
   */
  this.result = undefined

  // instance methods
  this.fetch = (isSimpleSearch, axiosConfig) => fetch(self, isSimpleSearch, axiosConfig)
  this.reset = () => reset(self)
  this.setSearchTerm = term => setSearchTerm(self, term)
  this.setPageNumber = page => setPageNumber(self, page)
  this.setPageSize = limit => setPageSize(self, limit)
  this.setSortOrder = enumOrder => setSortOrder(self, enumOrder)
  this.mergeFilter = (filter, occur) => mergeFilter(self, filter, occur)
  this.removeFilter = (field, occur) => removeFilter(self, field, occur)
  this.setSpec = (gridId, textOptions) => setSpec(self, gridId, textOptions)
  this.setCategoryNames = categoryNames => setCategoryNames(self, categoryNames)
  this.setCategoryIds = categoryIds => setCategoryIds(self, categoryIds)
  this.setBrandNames = brandNames => setBrandNames(self, brandNames)
  this.setBrandIds = brandIds => setBrandIds(self, brandIds)
  this.setSkus = skus => setSkus(self, skus)
  this.setProductIds = productIds => setProductIds(self, productIds)
  this.setPriceRange = (minPrice, maxPrice) => setPriceRange(self, minPrice, maxPrice)
  this.getItems = result => getItems(self, result)
  this.getTotalCount = result => getTotalCount(self, result)
  this.getTermSuggestions = result => getTermSuggestions(self, result)
  this.getBrands = result => getBrands(self, result)
  this.getCategories = result => getCategories(self, result)
  this.getPriceRange = result => getPriceRange(self, result)
  this.getSpecs = result => getSpecs(self, result)

  // preset query object
  reset(self)
  if (localStorage && storageKey) {
    // try to preset search history from storage
    const history = localStorage.getItem(storageKey)
    if (typeof history === 'string') {
      self.history = history.split('||')
    }
  }
}

/**
 * Construct a new search engine instance object.
 * @class EcomSearch
 * @param {number} [storeId=$ecomConfig.get('store_id')] - Preset Store ID number
 * @param {string|null} [storageKey='ecomSeachHistory'] - Item key to persist search history data
 * @param {object} [localStorage=window.localStorage] -
 * [Local Storage interface]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
 *
 * @example

const search = new EcomSearch()

 *
 * @example

// Defining Store ID other than the configured on `$ecomConfig`
const storeId = 2000
const search = new EcomSearch(storeId)

 */
