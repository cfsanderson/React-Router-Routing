import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <header className='main-navbar'>
          <ul role='nav'>
            <li><h1><NavLink to='/' onlyActiveOnIndex={true}>React Router Tutorial</NavLink></h1></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/repos'>Repos</NavLink></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    )
  }
})
