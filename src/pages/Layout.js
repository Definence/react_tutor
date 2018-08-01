import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
class Layout extends React.Component {
  handleClick() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        <Link to='/settings' className='btn btn-success'>Settings</Link>
        <Link to='/' className='btn btn-danger'>Archives</Link>
        <Link to='/featured' className='btn btn-primary'>Featured</Link>
        <button className='btn btn-secondary' onClick={this.handleClick.bind(this)}>Get props</button>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(Layout)
