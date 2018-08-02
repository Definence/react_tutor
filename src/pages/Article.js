import React from 'react'

export default class Archives extends React.Component {
  handleClick() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <p>Article: #{this.props.match.params.number}</p>
        <button className='btn btn-secondary' onClick={this.handleClick.bind(this)}>Article props</button>
      </div>
    )
  }
}
