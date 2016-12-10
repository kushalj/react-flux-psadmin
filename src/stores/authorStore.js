'use strict'

import AppDispatcher from '../dispatcher/appDispatcher'
import ActionTypes from '../constants/actionTypes'
import EventEmitter from 'events'
import _ from 'lodash'
let CHANGE_EVENT = 'change'

let _authors = []

let AuthorStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  getAllAuthors: function() {
    return _authors
  },

  getAuthorById: function(id) {
    return _.find(_authors, {id: id})
  }
})

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INIT:
      _authors = action.initialData.authors
      AuthorStore.emitChange()
      break
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author)
      AuthorStore.emitChange()
      break
    case ActionTypes.UPDATE_AUTHOR:
      let existingAuthor = _.find(_authors, {id: action.author.id})
      let existingAuthorIndex = _.indexOf(_authors, existingAuthor)
      _authors.splice(existingAuthorIndex, 1, action.author)
      AuthorStore.emitChange()
      break
    default:
        // no op
  }
})

export default AuthorStore
