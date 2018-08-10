import React                      from 'react'
import { Router, Route, Switch }  from 'react-router-dom'
import createBrowserHistory       from 'history/createBrowserHistory'
import { createStore,
        combineReducers }         from 'redux'
import historyReducer             from './reducers/history'
import userReducer                from './reducers/user'
import Home                       from './components/Home'
import Layout                     from './components/Layout'
import Featured                   from './components/Featured'
import Settings                   from './components/Settings'
import Articles                   from './components/articles/Articles'
import Buttons                    from './components/Buttons'

const history = createBrowserHistory(),
      reducers = combineReducers({
        user: userReducer,
        history: historyReducer
      }),
      store = createStore(reducers) // second argument is store's initial state

const routes = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/featured" component={Featured} />
        <Route path="/settings" component={Settings} />
        <Route path="/articles" component={Articles} />
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

store.subscribe(() => {
  console.log('Store has changed', store.getState())
})

store.dispatch({type: 'CHANGE_NAME', payload: 'Vasya'})
store.dispatch({type: 'CHANGE_AGE', payload: 22})
store.dispatch({type: 'CHANGE_AGE', payload: 30})

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
