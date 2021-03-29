# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.5.1](https://github.com/ecomplus/search-engine/compare/v2.5.0...v2.5.1) (2021-03-20)


### Bug Fixes

* **set-sort-order:** check price effective dates for 'offers' sort ([92cf8dc](https://github.com/ecomplus/search-engine/commit/92cf8dc88d6a0d8cccf9a1aaa5e2716140a1483f))

## [2.5.0](https://github.com/ecomplus/search-engine/compare/v2.4.1...v2.5.0) (2020-11-26)


### Features

* **set-sort-order:** accepting any valid item sortable field (asc by default) ([4c3cab4](https://github.com/ecomplus/search-engine/commit/4c3cab49f3215c7609bc469f64d713b23d979f20))

### [2.4.1](https://github.com/ecomplus/search-engine/compare/v2.4.0...v2.4.1) (2020-09-11)


### Bug Fixes

* **fetch:** handle pagination for simple search request ([8fbaf01](https://github.com/ecomplus/search-engine/commit/8fbaf015d7bba94a4486935b5506776e95d03d15))

## [2.4.0](https://github.com/ecomplus/search-engine/compare/v2.3.2...v2.4.0) (2020-09-10)


### Features

* **simple-search:** add `isSimpleSearch` param to fetch method ([#1](https://github.com/ecomplus/search-engine/issues/1)) ([21ac233](https://github.com/ecomplus/search-engine/commit/21ac2332083c023b9365619e8867231df1f4316c))


### Bug Fixes

* **set-sort-order:** ensure in stock sort with default sort option (views) ([78e82e7](https://github.com/ecomplus/search-engine/commit/78e82e7250e2d6aa2719779010096e386e36c2f8))

### [2.3.2](https://github.com/ecomplus/search-engine/compare/v2.3.1...v2.3.2) (2020-06-01)


### Bug Fixes

* **set-sort-order:** ensure in stock sort check for common sort ([fa1b8da](https://github.com/ecomplus/search-engine/commit/fa1b8da45d7cd56f218aeb3b71fcc75e0d24cdba))

### [2.3.1](https://github.com/ecomplus/search-engine/compare/v2.3.0...v2.3.1) (2020-05-27)


### Bug Fixes

* **set-sort-order:** ensure ordering in stock first on sort options ([8f34ae6](https://github.com/ecomplus/search-engine/commit/8f34ae6f90b7dfabdca09385ff29bd68336d0bbd))

## [2.3.0](https://github.com/ecomplus/search-engine/compare/v2.2.1...v2.3.0) (2020-05-23)


### Features

* **merge-filter:** add/handling occur param (occurency type) ([b4ef3ee](https://github.com/ecomplus/search-engine/commit/b4ef3ee6d99570c07e721b908d04657449b8ddd1))
* **remove-filter:** add/handling occur param (occurency type) ([fb0ba8d](https://github.com/ecomplus/search-engine/commit/fb0ba8df081fe171a36253446703d79249b5e146))


### Bug Fixes

* **set-category-ids:** using 'must' to handle multiple categories ([78c90e8](https://github.com/ecomplus/search-engine/commit/78c90e8cc26e59c79fe61826220393f12ac957e7))
* **set-category-names:** using 'must' to handle multiple categories ([6d2f03c](https://github.com/ecomplus/search-engine/commit/6d2f03cc4de7aabda657509c0925eb3639655be8))
* **set-search-term:** merge filter to prevent overriting 'must' queries ([bb689ea](https://github.com/ecomplus/search-engine/commit/bb689ea135230483f1e023cb29a32d42d759016f))

### [2.2.1](https://github.com/ecomplus/search-engine/compare/v2.2.0...v2.2.1) (2020-05-15)


### Bug Fixes

* **set-sort-order:** sort 'news' by creation date desc ([bd27f9e](https://github.com/ecomplus/search-engine/commit/bd27f9eb1f5fcf5a5defffc8fd01f0069db4a6ae))

## [2.2.0](https://github.com/ecomplus/search-engine/compare/v2.1.0...v2.2.0) (2020-05-15)


### Features

* **set-sort-order:** add 'offers' sort option ([cdc5748](https://github.com/ecomplus/search-engine/commit/cdc5748a07cde0a0c1a32e46b429e66fbd35ad00))

## [2.1.0](https://github.com/ecomplus/search-engine/compare/v2.0.3...v2.1.0) (2020-05-14)


### Features

* **set-sort-orders:** add 'news' option to enumOrder ([418c862](https://github.com/ecomplus/search-engine/commit/418c86286c549cb8bebb51a2709c7c327b39ef39))


### Bug Fixes

* **dsl:** add 'preference: in stock first' to default dsl query ([f813801](https://github.com/ecomplus/search-engine/commit/f813801b84581c58525d53b8861f9c8216a2f82a))

### [2.0.3](https://github.com/ecomclub/search-engine/compare/v2.0.2...v2.0.3) (2020-01-24)


### Bug Fixes

* **imports:** use import * as for lodash merge and cloneDeep (cjs) ([0d897d4](https://github.com/ecomclub/search-engine/commit/0d897d412b86c56d9d71178c214b24c279be4158))

### [2.0.2](https://github.com/ecomclub/search-engine/compare/v2.0.1...v2.0.2) (2020-01-07)

### [2.0.1](https://github.com/ecomclub/search-engine/compare/v2.0.0...v2.0.1) (2020-01-02)

## [2.0.0](https://github.com/ecomclub/search-engine/compare/v1.1.1...v2.0.0) (2019-12-31)


### ⚠ BREAKING CHANGES

* **deps:** ecomplus/utils and core-js no more direct dependencies

* **deps:** fix dependencies (peer) ([a0b00e5](https://github.com/ecomclub/search-engine/commit/a0b00e5dc24f728c21f1f9f4ce2a8903bf1acc46))

### [1.1.1](https://github.com/ecomclub/search-engine/compare/v1.1.0...v1.1.1) (2019-12-27)


### Bug Fixes

* **fetch:** properly setting request data (dsl) ([997132c](https://github.com/ecomclub/search-engine/commit/997132c))



## [1.1.0](https://github.com/ecomclub/search-engine/compare/v1.0.5...v1.1.0) (2019-12-27)


### Features

* **fetch:** accepting additional axios config object ([acc6dae](https://github.com/ecomclub/search-engine/commit/acc6dae))



### [1.0.5](https://github.com/ecomclub/search-engine/compare/v1.0.4...v1.0.5) (2019-09-10)


### Bug Fixes

* **history:** prevent duplicated term ([ef0d0e7](https://github.com/ecomclub/search-engine/commit/ef0d0e7))



### [1.0.4](https://github.com/ecomclub/search-engine/compare/v1.0.3...v1.0.4) (2019-09-10)


### Bug Fixes

* **history:** check total results before adding term to history ([7c8152a](https://github.com/ecomclub/search-engine/commit/7c8152a))



### [1.0.3](https://github.com/ecomclub/search-engine/compare/v1.0.2...v1.0.3) (2019-09-10)


### Bug Fixes

* **search-history:** unshift term to history, store up to 20 terms ([6ee7b30](https://github.com/ecomclub/search-engine/commit/6ee7b30))



### [1.0.2](https://github.com/ecomclub/search-engine/compare/v1.0.1...v1.0.2) (2019-08-24)


### Bug Fixes

* **constructor:** fix getting store id from config ([921883c](https://github.com/ecomclub/search-engine/commit/921883c))



### [1.0.1](https://github.com/ecomclub/search-engine/compare/v1.0.0...v1.0.1) (2019-08-13)


### Build System

* **webpack:** fix externals for lodash.utility ([424c471](https://github.com/ecomclub/search-engine/commit/424c471))



## [1.0.0](https://github.com/ecomclub/search-engine/compare/v0.10.0...v1.0.0) (2019-08-12)



## [0.10.0](https://github.com/ecomclub/search-engine/compare/v0.9.0...v0.10.0) (2019-08-06)


### Features

* **history:** handing search terms history list ([e1ab9f1](https://github.com/ecomclub/search-engine/commit/e1ab9f1))



## [0.9.0](https://github.com/ecomclub/search-engine/compare/v0.8.0...v0.9.0) (2019-08-06)


### Features

* **get-brands:** add 'getBrands' method ([fd3171c](https://github.com/ecomclub/search-engine/commit/fd3171c))
* **get-categories:** add 'getCategories' method ([4811243](https://github.com/ecomclub/search-engine/commit/4811243))
* **get-price-range:** add 'getPriceRange' method ([ed1f631](https://github.com/ecomclub/search-engine/commit/ed1f631))
* **get-specs:** add 'getSpecs' method ([75e6588](https://github.com/ecomclub/search-engine/commit/75e6588))
* **get-term-suggestions:** add 'getTermSuggestions' method ([1ec9b12](https://github.com/ecomclub/search-engine/commit/1ec9b12))



## [0.8.0](https://github.com/ecomclub/search-engine/compare/v0.7.0...v0.8.0) (2019-08-05)


### Features

* **get-items:** add 'getItems' method ([4c96b2e](https://github.com/ecomclub/search-engine/commit/4c96b2e))
* **get-total-count:** add 'getTotalCount' method ([a295007](https://github.com/ecomclub/search-engine/commit/a295007))
* **result:** saving last result object as instance member ([8241d41](https://github.com/ecomclub/search-engine/commit/8241d41))


### refactor

* **reset:** also unset instance result, change method name ([860c911](https://github.com/ecomclub/search-engine/commit/860c911))


### BREAKING CHANGES

* **reset:** 'resetQuery' method no more working, renamed to 'reset'



## [0.7.0](https://github.com/ecomclub/search-engine/compare/v0.6.0...v0.7.0) (2019-08-03)


### Features

* **remove-filters:** handling 'removeFilters' method ([425383c](https://github.com/ecomclub/search-engine/commit/425383c))
* **set-brand-ids:** handling 'setBrandIds' method ([cbac95e](https://github.com/ecomclub/search-engine/commit/cbac95e))
* **set-brand-names:** handling 'setBrandNames' method ([caf127f](https://github.com/ecomclub/search-engine/commit/caf127f))
* **set-category-ids:** handling 'setCategoryIds' method ([f775482](https://github.com/ecomclub/search-engine/commit/f775482))
* **set-category-names:** handling 'setCategoryNames' method ([bca22b0](https://github.com/ecomclub/search-engine/commit/bca22b0))
* **set-product-ids:** handling 'setProductIds' method ([23f1871](https://github.com/ecomclub/search-engine/commit/23f1871))
* **set-skus:** handling 'setSkus' method ([13172b2](https://github.com/ecomclub/search-engine/commit/13172b2))



## [0.6.0](https://github.com/ecomclub/search-engine/compare/v0.5.0...v0.6.0) (2019-08-02)


### Bug Fixes

* **merge-filter:** check field and key value for nested object filter ([0d4fc0f](https://github.com/ecomclub/search-engine/commit/0d4fc0f))


### Features

* **merge-filter:** handling 'mergeFilter' method ([b86c96c](https://github.com/ecomclub/search-engine/commit/b86c96c))
* **set-price-range:** handling 'setPriceRange' method ([5b9ead4](https://github.com/ecomclub/search-engine/commit/5b9ead4))
* **set-spec:** handling 'setSpec' methods ([0a93966](https://github.com/ecomclub/search-engine/commit/0a93966))


### refactor

* **constructor:** changing some methods names ([cad3d3e](https://github.com/ecomclub/search-engine/commit/cad3d3e))
* **set-price-range:** edit method params ([8927966](https://github.com/ecomclub/search-engine/commit/8927966))


### BREAKING CHANGES

* **set-price-range:** 'setPriceRange' no more working with object param
* **constructor:** some methods renamed



## [0.5.0](https://github.com/ecomclub/search-engine/compare/v0.4.0...v0.5.0) (2019-08-01)


### Bug Fixes

* **reset-query:** reset default page limit and sort by views ([6712898](https://github.com/ecomclub/search-engine/commit/6712898))


### Features

* **set-page-number:** handling 'setPageNumber' method ([baca926](https://github.com/ecomclub/search-engine/commit/baca926))
* **set-search-term:** handling 'setSearchTerm' method ([204eae2](https://github.com/ecomclub/search-engine/commit/204eae2))



## [0.4.0](https://github.com/ecomclub/search-engine/compare/v0.3.0...v0.4.0) (2019-08-01)


### Build System

* **webpack:** fix declaring lodash as external lib ([32cb011](https://github.com/ecomclub/search-engine/commit/32cb011))


### Features

* **set-page-size:** handing 'setPageSize' method ([cf12f36](https://github.com/ecomclub/search-engine/commit/cf12f36))


### refactor

* **constructor:** changing 'query' property to 'dsl' ([3e5e08b](https://github.com/ecomclub/search-engine/commit/3e5e08b))


### BREAKING CHANGES

* **constructor:** search.query will no more work, changed to search.dsl



## [0.3.0](https://github.com/ecomclub/search-engine/compare/v0.2.0...v0.3.0) (2019-07-31)


### Bug Fixes

* **query:** preset query object, set default page limit and sort ([0fd4f51](https://github.com/ecomclub/search-engine/commit/0fd4f51))
* **reset-query:** using assing to keep original default query object ([c7523f9](https://github.com/ecomclub/search-engine/commit/c7523f9))
* **reset-query:** using deep clone to keep default query object intact ([9bd53ab](https://github.com/ecomclub/search-engine/commit/9bd53ab))


### Build System

* **webpack:** ignoring lodash.clonedeep on bundler as external package ([9797129](https://github.com/ecomclub/search-engine/commit/9797129))


### Features

* **constructor:** setup methods ([b633495](https://github.com/ecomclub/search-engine/commit/b633495))
* **reset-query:** return self to add ability to chain code ([10b00ca](https://github.com/ecomclub/search-engine/commit/10b00ca))
* **set-sort-order:** handling 'setSortOrder' method ([419ae41](https://github.com/ecomclub/search-engine/commit/419ae41))
* **set-sort-order:** return self to add ability to chain code ([191a7f1](https://github.com/ecomclub/search-engine/commit/191a7f1))



## [0.2.0](https://github.com/ecomclub/search-engine/compare/v0.1.0...v0.2.0) (2019-07-30)


### Features

* **fetch:** handling search api request with fetch method ([ebd12ba](https://github.com/ecomclub/search-engine/commit/ebd12ba))
* **method:** add 'resetQuery' method and setup with default Query DSL ([f3770d9](https://github.com/ecomclub/search-engine/commit/f3770d9))



## 0.1.0 (2019-07-29)


### Build System

* **babel:** setup babel config file ([d272605](https://github.com/ecomclub/search-engine/commit/d272605))
* **webpack:** edit output filename for cdns ([35d1308](https://github.com/ecomclub/search-engine/commit/35d1308))
* **webpack:** setup webpack config with two outputs ([5f170f2](https://github.com/ecomclub/search-engine/commit/5f170f2))


### Features

* **constructor:** setup constructor function ([6a87d99](https://github.com/ecomclub/search-engine/commit/6a87d99))


### Tests

* **home:** setup html file for tests ([8dfb2aa](https://github.com/ecomclub/search-engine/commit/8dfb2aa))
