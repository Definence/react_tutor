import React from 'react'

export default class Archives extends React.Component {
  handleClick() {
    console.log(this.props)
  }

  render() {
    const { params } = this.props.match
    return (
      <div>
        <p>Article: #{params.number}</p>
        <button className='btn btn-secondary' onClick={this.handleClick.bind(this)}>Article props</button>
      </div>
    )
  }
}
