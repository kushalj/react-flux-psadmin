'use strict'

import React from 'react'
import { Link } from 'react-router'

import AuthorApi from '../../api/authorApi'
import AuthorList from './authorList'

export default class AuthorPage extends React.Component {
  constructor() {
    super()
    this.state = {
      authors: []
    }
  }

  componentDidMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() })
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
          <Link to="/addAuthor" className="btn btn-default">Add Author</Link>
          <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

module.exports = AuthorPage

