'use strict'

import React from 'react'
import AuthorForm from './authorForm'
import AuthorApi from '../../api/authorApi'
import { hashHistory, withRouter } from 'react-router'
import toastr from 'toastr'

class ManageAuthorPage extends React.Component {
  constructor() {
    super()
    this.state = {
      author: { id: '', lastName: '', lastName: '' },
      errors: {},
      dirty: false
    }
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      if (this.state.dirty && !confirm('Leave without saving?'))
        return false
    })
  }

  setAuthorState = (event) => {
    this.setState({ dirty: true })
    let changedAuthor = this.state
    let field = event.target.name
    let value = event.target.value
    changedAuthor[field] = value
    return this.setState({ author: changedAuthor })
  }

  authorFormIsValid() {
    let formIsValid = true
    this.state.errors = {}

    if (this.state.author.firstName && this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'must be greater than 3 characters'
      formIsValid = false
    }

    if (this.state.author.lastName && this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'must be greater than 3 characters'
      formIsValid = false
    }

    this.setState({ errors: this.state.errors })
    return formIsValid
  }

  saveAuthor = (event) => {
    event.preventDefault()
    this.setState({ dirty: false })

    if (!this.authorFormIsValid()) {
      return
    }

    AuthorApi.saveAuthor(this.state.author)
    toastr.success('Author saved.')
    hashHistory.push('/authors')
  }

  render() {
    return (
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors} />
    )
  }
}

export default withRouter(ManageAuthorPage)
