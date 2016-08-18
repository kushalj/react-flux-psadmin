'use strict'

const React = require('react')
const AuthorApi = require('../../api/authorApi')
const AuthorList = require('./authorList')

const Authors = React.createClass({
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

module.exports = Authors

