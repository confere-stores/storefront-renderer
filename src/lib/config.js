'use strict'

const devMode = process.env.NODE_ENV !== 'production'

module.exports = (settings = null) => {
// setup genaral config properties
  const primaryColor = settings.primary_color || '#3fe3e3'
  const secondaryColor = settings.secondary_color || '#5e1efe'
  const lang = settings.lang || 'en_us'
// number Store ID from content settings or env var
  let storeId = settings.store_id || process.env.ECOM_STORE_ID || 1011
  if (typeof storeId === 'string') {
    storeId = parseInt(storeId, 10)
  }

// imported storefront template and components packages
  const templatePkg = process.env.STOREFRONT_TEMPLATE || '@ecomplus/storefront-template'
  const componentsPkg = process.env.STOREFRONT_COMPONENTS || '@ecomplus/storefront-components'

  return {
    devMode,
    settings,
    lang,
    storeId,
    primaryColor,
    secondaryColor,
    templatePkg,
    componentsPkg
  }
}
