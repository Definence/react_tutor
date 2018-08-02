import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Menu from '../components/Menu'
class Layout extends React.Component {
  handleClick() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <header>
          <Menu />
        </header>

        <main>
          <h1>KillerNews.net</h1>
          <Link to='/settings' class='btn btn-success'>Settings</Link>
          <Link to='/' className='btn btn-danger'>Archives</Link>
          <Link to='/featured' className='btn btn-primary'>Featured</Link>
          <Link to='/articles/1' className='btn btn-primary'>Article(1)</Link>
          <button className='btn btn-secondary' onClick={this.handleClick.bind(this)}>Get props</button>
          {this.props.children}
        </main>

        <footer></footer>
      </div>
    )
  }
}

export default withRouter(Layout)
