import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import Authenticate from './Authenticate'
import Logout from './Logout'
import Login from './Login'

export default function getRoutes (checkAuth) {
  return (
    <Router>
        <Switch>
          <Route exact={true} path='/' component={checkAuth(Login)} />
          <Route path='/login' component={checkAuth(Authenticate)} />
          <Route path='/home' component={checkAuth(App)} />
          <Route path='/logout' component={Logout} />
        </Switch>
    </Router>
  )
}
