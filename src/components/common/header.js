'use strict'

import React from 'react'
import { Link } from 'react-router'

export default class Header extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/pluralsight-logo.png" alt=""/>
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
