'use strict'

import React, {Component} from 'react'

class AuthorForm extends Component {
  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <label htmlFor="firstName">First Name</label>
        <input type="text"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          ref="firstName"
          onChange={this.props.onChange}
          value={this.props.author.firstName || ''} />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input type="text"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          ref="lastName"
          onChange={this.props.onChange}
          value={this.props.author.lastName || ''} />
        <br />

        <input type="submit" className="btn btn-default" value="Save" />
      </form>
    )
  }
}

export default AuthorForm
