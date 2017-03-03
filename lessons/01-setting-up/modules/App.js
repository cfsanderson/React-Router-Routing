import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <header className='main-navbar'>
          <h1><IndexLink to='/' activeClassName='active-home' >React Router Tutorial</IndexLink></h1>
          <ul role='nav'>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/repos'>Repos</NavLink></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    )
  }
})
