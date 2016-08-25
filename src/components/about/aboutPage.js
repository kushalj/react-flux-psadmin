'use strict'

import React from 'react'
import { withRouter }  from 'react-router'

class About extends React.Component {
  //the 'warning' on page entry moved to routes.js

  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      if (!confirm('Are you sure you want to leave a page this exciting?'))
        return 'You have unsaved information, are you sure you want to leave this page?'
    })
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses the following technologies</p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(About)
