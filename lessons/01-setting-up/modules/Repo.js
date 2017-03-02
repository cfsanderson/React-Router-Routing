import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='inner-comp'>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
})
