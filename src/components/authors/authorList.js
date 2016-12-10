'use strict'

import React from 'react'
import { Link } from 'react-router'
import AuthorActions from '../../actions/authorActions'
import toastr from 'toastr'

export default class AuthorList extends React.Component {
  constructor() {
    super()
    this.deleteAuthor = this.deleteAuthor.bind(this)
  }

  static propTypes() {
    authors: React.PropTypes.array.isRequired
  }

  deleteAuthor(event, id) {
    event.preventDefault()
    AuthorActions.deleteAuthor(id)
    toastr.success('Author Deleted')
  }

  // onClick changes from autobind:
  // https://facebook.github.io/react/blog/2013/07/02/react-v0-4-autobind-by-default.html
  // http://stackoverflow.com/questions/30608347/how-to-pass-arguments-to-functions-in-react-js
  // and event passing was here:
  // http://stackoverflow.com/questions/34350988/react-passing-parameter-via-onclick-event-using-es6-syntax
  render() {
    let createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={(event) => this.deleteAuthor(event, author.id)}>Delete</a></td>
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
              <th></th>
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
}
