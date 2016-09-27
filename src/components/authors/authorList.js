'use strict'

import React from 'react'
import { Link } from 'react-router'

const AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  render: function () {
    let createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><Link to={'/manageAuthor/' + author.id}>{author.id}</Link></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      )
    }

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { this.props.authors.map(createAuthorRow, this) }
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = AuthorList

