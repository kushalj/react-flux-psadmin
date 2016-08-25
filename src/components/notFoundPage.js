'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class NotFound extends React.Component{
  render() {
    return (
      <div>
        <h1>Page not found</h1>
        <p>nothing to see here!</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    )
  }
}
