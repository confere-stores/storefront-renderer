export default (self, field, prop, value, occur) => {
  // abstraction to set or remove filter by field IDs/names
  const newProp = field !== null ? `${field}.${prop}` : prop
  if (Array.isArray(value)) {
    // setup new filter object
    const filter = { terms: {} }
    filter.terms[newProp] = value
    // remove concurrent filter and merge the new
    let concurrentProp
    if (field !== null) {
      concurrentProp = `${field}.${(prop === '_id' ? 'name' : '_id')}`
    } else {
      // product SKUs or IDs
      concurrentProp = prop === '_id' ? 'sku' : '_id'
    }
    return self.removeFilter(concurrentProp, occur).mergeFilter(filter, occur)
  } else if (value === null) {
    // just remove respective filter
    return self.removeFilter(newProp, occur)
  }
  return self
}
