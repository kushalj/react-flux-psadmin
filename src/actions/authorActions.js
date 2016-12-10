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

  static updateAuthor(author) {
    let updatedAuthor = AuthorApi.saveAuthor(author)

    AppDispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    })
  }

  static deleteAuthor(id) {
    AuthorApi.deleteAuthor(id)

    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id: id
    })
  }
}
