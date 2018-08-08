import React from 'react'
import { withRouter } from 'react-router'
import Menu from './Menu'
class Layout extends React.Component {
  render() {
    return (
      <div>
        <header><Menu /></header>

        <main>
          <h1>KillerNews.net</h1>
          {this.props.children}
        </main>

        <footer></footer>
      </div>
    )
  }
}

export default withRouter(Layout)
