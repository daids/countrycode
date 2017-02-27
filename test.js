var assert = require('assert')
var countrycode = require('./countrycode.js')
assert.equal(countrycode.cn('CN'), '中国')
assert.equal(countrycode.en('CN'), 'China')
