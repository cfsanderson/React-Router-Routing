import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import videoURL from '../images/runners.mp4'
import posterURL from '../images/runners-frame1.jpg'

export default React.createClass({
  render() {
    return (
      <div>
        <header className='main-navbar'>
          <video autoPlay loop muted poster={posterURL} id='video-bg'>
            <source src={videoURL} type='video/mp4' />
          </video>
          <div id="overlay">
            <h2>overlay</h2>
            <ul role='nav'>
              <li><h1><NavLink to='/' onlyActiveOnIndex={true}>Page Template</NavLink></h1></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/repos'>Repos</NavLink></li>
            </ul>
          </div>
        </header>
        <ul className="socials">
          <li><i class="fa fa-twitter-square" aria-hidden="true"></i>tweet</li>
          <li><i class="fa fa-facebook-square" aria-hidden="true"></i>like</li>
          <li><i class="fa fa-linkedin-square" aria-hidden="true"></i>link</li>
          <li><i class="fa fa-google-plus-square" aria-hidden="true"></i>+1</li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

// translucent overlay - http://codepen.io/icutpeople/pen/whueK?editors=1100
