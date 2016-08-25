'use strict'

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './components/homePage'
import NotFound from './components/notFoundPage'
import Authors from './components/authors/authorPage'
import About from './components/about/aboutPage'

export const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="authors" component={Authors} />
    <Route path="about" component={About} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
)





