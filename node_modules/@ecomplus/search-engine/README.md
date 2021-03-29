# E-Com Plus Search Engine

[![Publish](https://github.com/ecomplus/search-engine/workflows/Publish/badge.svg)](https://github.com/ecomplus/search-engine/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/search-engine/badge)](https://www.codefactor.io/repository/github/ecomplus/search-engine) [![npm version](https://img.shields.io/npm/v/@ecomplus/search-engine.svg)](https://www.npmjs.org/@ecomplus/search-engine) [![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

UMD JS lib to handle products search for E-Com Plus stores

[CHANGELOG](https://github.com/ecomplus/search-engine/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/search-engine` package is a wrapper for [E-Com Plus Search API](https://developers.e-com.plus/docs/api/#/search/), can be used to handle a full featured products search system, from simple items search to applying multiple filters and aggregations.

It's available for both Node.js and browser environments.

- [Get started](https://developers.e-com.plus/search-engine/module-@ecomplus_search-engine.html)
- [Class reference](https://developers.e-com.plus/search-engine/EcomSearch.html)

### Example

```js
import EcomSearch from '@ecomplus/search-engine'

const search = new EcomSearch()

search.setSearchTerm('smartphone').fetch()
  .then(result => {
    search.getItems().forEach(item => {
      console.log(item.name)
    })
  })
  .catch(error => {
    console.error(error)
    if (error.response) {
      console.log(error.response)
    }
  })
```

### Installation

It _may_ require and doesn't include `core-js` (optional) and [`@ecomplus/utils`](https://developers.e-com.plus/utils/) (peer dependency).

#### Webpack

```bash
npm i --save core-js @ecomplus/utils @ecomplus/search-engine
```

#### Node.js

```bash
npm i --save @ecomplus/utils @ecomplus/search-engine
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@ecomplus/search-engine/dist/ecom-search.var.min.js"></script>
```

When importing from CDN, `_.cloneDeep`, `_.merge`, `ecomUtils` and `ecomClient` libraries **must be included separately** and available on window scope.
