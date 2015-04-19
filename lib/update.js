'use strict'

var updateOne = require('./utils/update-one')
var updateMany = require('./utils/update-many')

module.exports = function update (objectsOrIds, change) {
  var Promise = this.utils.Promise
  var state = { db: this.db, Promise: Promise, errors: this.utils.Errors }
  var isArray = Array.isArray(objectsOrIds)

  if (typeof objectsOrIds !== 'object' && !change) {
    return Promise.reject(new Error('Must provide change'))
  }

  return isArray ? updateMany(state, objectsOrIds, change) : updateOne(state, objectsOrIds, change)
}
