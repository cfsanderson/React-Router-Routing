import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
// import FirstRepo from './modules/FirstRepo'
// import SecondRepo from './modules/SecondRepo'
import Repo from './modules/Repo'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/repos' component={Repos}/>
      <Route path='/repos/:userName/:repoName' component={Repo}/>
      <Route path='/about' component={About}/>
    </Route>
    {/* putting any of the above routes outside of the App route just gives it a unique path/page. Boxes, inside of boxes, inside of boxes, inside... */}
  </Router>
), document.getElementById('app'))

{/* <Route path='/repos/first-repo' component={FirstRepo}/> */}
{/* <Route path='/repos/second-repo' component={SecondRepo}/> */}
