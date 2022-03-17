'use strict'

module.exports = (d, s) => {
  const fs = require('fs')
  const path = require('path')
  const ecomClient = require('@ecomplus/client')
  const EcomSearch = require('@ecomplus/search-engine')
  const paths = require('./paths')(d)
  const config = require('./config')(s)
  const axios = require('axios')

  const reviewApi = axios.create({
    baseURL: 'https://review.clubou.com.br/v1'  // Change to prod url
  })

  return (storeId = config.storeId, pubSrc = paths.pub, ecomManifest) => {
    return new Promise((resolve, reject) => {
      const ecomSearch = new EcomSearch(storeId)
      if (!ecomManifest) {
        // check for custom E-Com Plus manifest file
        const filename = 'ecom-manifest.json'
        let manifestSrc = path.resolve(pubSrc, filename)
        try {
          if (!fs.existsSync(manifestSrc)) {
            // use default manifest
            manifestSrc = path.resolve(__dirname, '../assets/', filename)
          }
        } catch (err) {
          reject(err)
        }
        ecomManifest = require(manifestSrc)
      }

      // load data for template renderization
      const getPromises = []
      const data = {}
      const dataManifest = ecomManifest.data
      if (dataManifest) {
        for (const prop in dataManifest) {
          const propManifest = dataManifest[prop]
          if (propManifest) {
            // run manifest configured GET request
            const { client, search } = propManifest
            let req

            if (client) {

              if (prop !== 'ratings') {
                // request with ecomClient
                const { api, endpoint } = client
                const url = endpoint.replace(':store_id', storeId)
                req = ecomClient[api]({
                  url,
                  storeId
                }).then(response => {
                  let body = response.data
                  if (!body._id && body.result) {
                    // list request
                    body = body.result
                  }
                  data[prop] = body
                })
              } else {
                const { endpoint } = client
                req = reviewApi.get(`${endpoint}?storeId=${storeId}`).then(response => {
                  let body = response.data
                  data[prop] = body.ponderated
                })
              }

            } else if (search) {
              // request with search engine instance
              req = ecomSearch.fetch()
                .then(() => {
                  data[prop] = ecomSearch.getItems()
                })
                .catch(() => {
                  data[prop] = []
                })
            }

            // add request to promises list
            getPromises.push(req)
          }
        }
      }

      Promise.all(getPromises).then(() => resolve(data)).catch(reject)
    })
  }
}
