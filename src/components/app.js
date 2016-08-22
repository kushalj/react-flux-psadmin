'use strict'

window.$ = window.jQuery = require('jquery')
// require('bootstrap')

import React from 'react'
// import Router from 'react-router'

import Header from './common/header'
// const RouteHandler = Router.RouteHandler
          // <RouteHandler />

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
            {this.props.children}
        </div>
      </div>
    )

  }
}

