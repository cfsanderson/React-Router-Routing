import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
// import videoURL from '../images/runners.mp4'
// import posterURL from '../images/runners-frame1.jpg'

export default React.createClass({
  render() {
    return (
      <div>
        <header className='main-navbar'>
          {/* <video autoPlay loop muted poster={posterURL} id='video-bg'>
            <source src={videoURL} type='video/mp4' />
          </video> */}
          <ul role='nav'>
            <li><h1><NavLink to='/' onlyActiveOnIndex={true}>Page Template</NavLink></h1></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/repos'>Repos</NavLink></li>
          </ul>
        </header>
        {this.props.children}
      </div>
    )
  }
})
