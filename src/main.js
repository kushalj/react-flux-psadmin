'use strict'

import React from 'react'
import { Router, hashHistory } from 'react-router'
import { render } from 'react-dom'

import { routes } from './routes'
import InitActions from './actions/initActions'

InitActions.initApp()

render(
  <Router history={hashHistory} routes={routes} />, document.getElementById('app')
)
