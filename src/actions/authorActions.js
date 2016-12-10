'use strict'

import AppDispatcher from '../dispatcher/appDispatcher'
import AuthorApi from '../api/authorApi'
import ActionTypes from '../constants/actionTypes'

export default class AuthorActions {
  static createAuthor(author) {
    let newAuthor = AuthorApi.saveAuthor(author)

    // Hey dispatcher, go tell all the stores that a new author was just created
    AppDispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    })
  }
}
