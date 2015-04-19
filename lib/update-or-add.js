'use strict'

var updateOrAddOne = require('./utils/update-or-add-one')
var updateOrAddMany = require('./utils/update-or-add-many')

module.exports = function updateOrAdd (idOrObjectOrArray, newObject) {
  var state = {
    db: this.db,
    Promise: this.utils.Promise,
    errors: this.utils.Errors
  }
  var isArray = Array.isArray(idOrObjectOrArray)

  return isArray ? updateOrAddMany(state, idOrObjectOrArray) : updateOrAddOne(state, idOrObjectOrArray, newObject)
}
