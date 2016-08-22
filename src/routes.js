'use strict'

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Home from './components/homePage'
// import Authors from './components/authors/authorPage'
// import About from './components/about/aboutPage'

    // <Route name="authors" component={Authors} />
    // <Route name="about" component={About} />
export const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
  </Route>

)





