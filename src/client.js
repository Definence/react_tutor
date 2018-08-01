import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import Menu from './components/Menu'

ReactDOM.render(
  <div>
    <Menu />
    <hr/>
    <Routes />
  </div>,
  document.getElementById('app')
)
