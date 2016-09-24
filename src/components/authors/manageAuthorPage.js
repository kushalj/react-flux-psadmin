'use strict'

import React from 'react'
import AuthorForm from './authorForm'
import AuthorApi from '../../api/authorApi'
import { hashHistory } from 'react-router'

export default class ManageAuthorPage extends React.Component {
  constructor() {
    super()
    this.state = {
      author: { id: '', firstName: '', lastName: '' }
    }
  }

  setAuthorState = (event) => {
    let changedAuthor = this.state
    let field = event.target.name
    let value = event.target.value
    changedAuthor[field] = value
    return this.setState({ author: changedAuthor })
  }

  saveAuthor = (event) => {
    event.preventDefault()
    AuthorApi.saveAuthor(this.state.author)
    hashHistory.push('/authors')
  }

  render() {
    return (
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor} />
    )
  }
}
