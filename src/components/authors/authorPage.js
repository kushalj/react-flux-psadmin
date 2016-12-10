'use strict'

import React from 'react'
import { Link } from 'react-router'

import AuthorStore from '../../stores/authorStore'
import AuthorList from './authorList'

export default class AuthorPage extends React.Component {
  constructor() {
    super()
    this.state = {
      authors: AuthorStore.getAllAuthors()
    }
    //ES6 constructors don't autobind 'this'
    //https://github.com/goatslacker/alt/issues/283
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange)
  }

  // clean up when unmounted
  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors() })
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
