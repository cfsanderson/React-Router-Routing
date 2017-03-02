import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <header className='main-navbar'>
          <h1><Link to='/' activeClassName='active-home'>React Router Tutorial</Link></h1>
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
