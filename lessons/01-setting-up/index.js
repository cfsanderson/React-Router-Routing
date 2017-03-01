import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/repos' component={Repos}/>
      <Route path='/about' component={About}/>
    </Route>
    {/* putting any of the above routes outside of the App route just gives it a unique path/page. Boxes, inside of boxes, inside of boxes, inside... */}
  </Router>
), document.getElementById('app'))
