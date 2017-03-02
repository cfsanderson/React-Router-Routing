import React, { Component } from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='inner-comp'>
        <h2>Repos</h2>
        <ul>
          <li><Link to='/repos/reactjs/react-router'>React Router</Link></li>
          <li><Link to='/repos/facebook/react'>React</Link></li>
        </ul>
        {/* <div>
          <h2>Here is the Repo Component</h2>
          <ul role='nav'>
            <li><Link  to='/repos/first-repo' activeClassName='active'>First Repo</Link></li>
            <li><Link  to='/repos/second-repo' activeClassName='active'>Second Repo</Link></li>
          </ul>
        </div>
        {this.props.children} */}
      </div>
    )
  }
})
