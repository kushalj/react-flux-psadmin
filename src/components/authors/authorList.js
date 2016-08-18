'use strict'

const React = require('react')

const AuthorList = React.createClass({
  render: function () {
    let createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
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

