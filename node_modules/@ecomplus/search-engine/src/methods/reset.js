import query from './../lib/dsl'
import * as cloneDeep from 'lodash.clonedeep'

export default self => {
  // reset Query DSL
  self.dsl = cloneDeep(query)
  // unset result
  self.result = undefined
  // reset default page limit and sort by views
  return self.setPageSize().setSortOrder()
}

/**
 * @method
 * @name EcomSearch#reset
 * @description Reset default
 * [Query DSL]{@link https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html}
 * for [Search API]{@link https://developers.e-com.plus/docs/api/#/search/items/items}
 * request body and unset instance result.
 *
 * @returns {self}
 *
 * @example

// Reset instance `dsl` and `result`
search.reset()

 */
