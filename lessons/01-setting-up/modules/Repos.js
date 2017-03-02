import React, { Component } from 'react'
import { Link } from 'react-router'

class Repos extends Component {

  render() {
    return (
      <div className='inner-comp'>
        <h2>Here is the Repo Component</h2>
        <ul role='nav'>
          <li><Link  to='/first-repo' activeClassName='active'>First Repo</Link></li>
          <li><Link  to='/second-repo' activeClassName='active'>Second Repo</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Repos
