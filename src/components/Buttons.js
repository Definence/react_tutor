import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {
  handleClick() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <NavLink to='/settings' class='btn btn-success' activeClassName='active'>Settings</NavLink>
        <NavLink to='/' className='btn btn-danger'>Archives</NavLink>
        <NavLink to='/featured' className='btn btn-primary'>Featured</NavLink>
        <button className='btn btn-secondary' onClick={this.handleClick.bind(this)}>Get props</button>
      </div>
    )
  }
}

export default Menu
