
// var Dispatcher = require(flux).Dispatcher
import { Dispatcher } from 'flux'

// ES6 issues fixed with code stolen from:
// https://medium.com/front-end-developers/react-and-flux-migrating-to-es6-with-babel-and-eslint-6390cf4fd878#.la4axm57d

class DispatcherClass extends Dispatcher{

  handleViewAction(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action,
    })
  }

  handleServerAction(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action,
    })
  }
}

const AppDispatcher = new DispatcherClass

export default AppDispatcher
