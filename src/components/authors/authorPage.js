'use strict'

import React from 'react'
const AuthorApi = require('../../api/authorApi').default
const AuthorList = require('./authorList').default

const AuthorPage = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    }
  },

  componentDidMount: function () {
    if (this.isMounted())
      this.setState({ authors: AuthorApi.getAllAuthors() })
  },

  render: function () {
    return (
      <div>
        <h1>Authors</h1>
          <AuthorList authors={this.state.authors} />
      </div>
    )
  }
})

module.exports = AuthorPage

