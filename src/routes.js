'use strict'

import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './components/app'
import Home from './components/homePage'
import NotFound from './components/notFoundPage'
import Authors from './components/authors/authorPage'
import About from './components/about/aboutPage'

const aboutWarning = (nextState, replace, callback) => {
  if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
    return false
  } else {
    callback()
  }
}

export const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="authors" component={Authors} />
    <Route path="about" component={About} onEnter={aboutWarning} />
    <Redirect path="about-us" to="about" />
    <Redirect path="awthurs" to="authors" />
    <Redirect path="about/*" to="about" />
    <Route path="*" component={NotFound} />
  </Route>
)





