import React from 'react'
import { Link } from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <div>
        <h1>KillerNews.net</h1>
        <Link to='/settings'>Settings</Link>
      </div>
    )
  }
}
