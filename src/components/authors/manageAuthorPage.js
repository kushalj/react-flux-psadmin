'use strict'

import React from 'react'
import AuthorForm from './authorForm'

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

  render() {
    return (
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState} />
    )
  }
}
