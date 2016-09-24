'use strict'

import React, {Component} from 'react'
import Input from '../common/textInput'

class AuthorForm extends Component {
  static propTypes() {
    author: React.PropTypes.object.isRequired
    onSave: React.PropTypes.func.isRequired
    onChange: React.PropTypes.func.isRequired
    errors: React.PropTypes.object
  }


  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input
          name = "firstName"
          label = "First Name"
          value = {this.props.author.firstName}
          onChange = {this.props.onChange}
          error = {this.props.errors.firstName} />

        <Input
          name = "lastName"
          label = "Last Name"
          value = {this.props.author.lastName}
          onChange = {this.props.onChange}
          error = {this.props.errors.lastName} />

        <input type="submit" className="btn btn-default" value="Save" onClick={this.props.onSave} />
      </form>
    )
  }
}

export default AuthorForm
