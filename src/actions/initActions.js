'use strict'

import AppDispatcher from '../dispatcher/appDispatcher'
import ActionTypes from '../constants/actionTypes'
import AuthorApi from '../api/authorApi'

export default class InitActions {
  static initApp() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.INIT,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    })
  }
}
