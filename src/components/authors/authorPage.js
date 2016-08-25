'use strict'

import React from 'react'
// const AuthorApi = require('../../api/authorApi')
// const AuthorList = require('./authorList')
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
          <AuthorList authors={this.state.authors} />
      </div>
    )
  }
}

module.exports = AuthorPage

