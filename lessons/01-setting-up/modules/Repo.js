import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='inner-comp'>
        <h2>{this.props.params.userName}</h2>
        <Link to='/repos'>BACK</Link>
      </div>
    )
  }
})
