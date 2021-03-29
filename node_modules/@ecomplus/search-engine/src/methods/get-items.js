import { searchedItems } from '@ecomplus/utils'

export default (self, result) => {
  // map list of item objets from search result
  if (!result) {
    result = self.result
  }
  return searchedItems(result)
}

/**
 * @method
 * @name EcomSearch#getItems
 * @description List items from search result object.
 *
 * @param {result} [result=self.result] - Search result object
 * @returns {array<object>}
 *
 * @example

// Run search request and list result items
await search.fetch()
search.getItems().forEach(item => {
  console.log(item)
  console.log(item.name)
})

 * @example

// You can also pass search result object as param
search.fetch().then(result => search.getItems(result).forEach(({ sku }) => console.log(sku)))

 */
