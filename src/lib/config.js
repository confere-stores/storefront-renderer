'use strict'

const devMode = process.env.NODE_ENV !== 'production'

module.exports = (settings = null) => {
// setup genaral config properties
  const primaryColor = settings.primary_color || '#3fe3e3'
  const secondaryColor = settings.secondary_color || '#5e1efe'
  const lang = settings.lang || 'en_us'
// number Store ID from content settings or env var
  let storeId = settings.store_id || 1011
  if (typeof storeId === 'string') {
    storeId = parseInt(storeId, 10)
  }

// imported storefront template and components packages
  const templatePkg = '@confere-stores/storefront-template'
  const componentsPkg = '@confere-stores/storefront-components'

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
