import React                      from 'react'
import { Router, Route, Switch }  from 'react-router-dom'
import createBrowserHistory       from 'history/createBrowserHistory'
import Home                       from './components/Home'
import Layout                     from './components/Layout'
import Featured                   from './components/Featured'
import Settings                   from './components/Settings'
import Article                    from './components/Article'
import Buttons                    from './components/Buttons'

const history = createBrowserHistory()

const routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/featured" component={Featured} />
        <Route path="/settings" component={Settings} />
        <Route path="/articles/:number" component={Article} />
        <Route path="/buttons" component={Buttons} />
        {/* <Courses>
            <Route path="/courses/html" component={HTML} />
            <Route path="/courses/css" component={CSS} />
            <Route path="/courses/javascript" component={JavaScript} />
        </Courses> */}
      </Switch>
    </Layout>
  </Router>
)

export default routes

  // other router example
  // import { Router, Route, Link } from 'react-router-dom'
  // <Router history={history}>
  //   <div>
  //     <ul>
  //       <li><Link to='/'>Home</Link></li>
  //       <li><Link to='/archives'>Archives</Link></li>
  //       <li><Link to='/featured'>Featured</Link></li>
  //       <li><Link to='/settings'>Settings</Link></li>
  //     </ul>

  //     <hr/>

  //     <Route path='/' component={Layout} />
  //     <Route path='/archives' component={Archives} />
  //     <Route path='/featured' component={Featured} />
  //     <Route path='/settings' component={Settings} />
  //   </div>
  // </Router>
