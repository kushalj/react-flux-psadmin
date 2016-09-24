'use strict'

import React, {Component} from 'react'
import Input from '../common/textInput'

class AuthorForm extends Component {
  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input
          name = "firstName"
          label = "First Name"
          value = {this.props.author.firstName}
          onChange = {this.props.onChange} />

        <Input
          name = "lastName"
          label = "Last Name"
          value = {this.props.author.lastName}
          onChange = {this.props.onChange} />

        <input type="submit" className="btn btn-default" value="Save" />
      </form>
    )
  }
}

export default AuthorForm
