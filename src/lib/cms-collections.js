'use strict'

const f = (d) => {
  const fs = require('fs')
  const path = require('path')
  const paths = require('./paths')(d)

  const cmsCollections = []
// list views from #cms pages folder
  let collectionsViews
  try {
    collectionsViews = fs.readdirSync(path.resolve(paths.pages, '#cms'))
  } catch (e) {
    // not a directory ?
  }
  if (Array.isArray(collectionsViews) && collectionsViews.length) {
    collectionsViews.forEach(filename => {
      // push to collections removing extension from filename
      cmsCollections.push(filename.replace('.ejs', ''))
    })
  }
  
  return cmsCollections
}

module.exports = f
