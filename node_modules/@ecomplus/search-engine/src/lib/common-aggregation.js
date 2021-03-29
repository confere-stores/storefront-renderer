export default ({ aggregations }, field) => {
  // abstraction to get buckets array from result aggregations
  let buckets
  if (aggregations && aggregations[field]) {
    buckets = aggregations[field].buckets
  }
  return (Array.isArray(buckets) && buckets) || []
}
