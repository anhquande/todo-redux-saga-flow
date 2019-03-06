import React from 'react'
import { Switch } from 'react-router'
import { Home } from '../containers/Home'
import { HelpMe } from '../containers/HelpMe'
import { Imprint } from '../containers/Imprint'
import { NoMatch } from '../containers/NoMatch'
import { Todos } from '../containers/todos/Todos'
import { Tags } from '../containers/tags/Tags'
import { LoginPage } from '../containers/login'
import { AuthenticatedRoute } from './AuthenticatedRoute'
import { NonAuthenticatedRoute } from './NonAuthenticatedRoute'
import { Admin } from '../containers/app/Admin'
import { SecureRoute } from './SecureRoute'

export const secureRoutes = (
  <Switch>
    <SecureRoute path="/admin/home" component={Home}/>
    <SecureRoute path="/admin/help" component={HelpMe}/>
    <SecureRoute path="/admin/imprint" component={Imprint}/>
    <SecureRoute path="/admin/todos" component={Todos}/>
    <SecureRoute path="/admin/tags" component={Tags}/>
    <SecureRoute component={NoMatch}/>
  </Switch>
)

export const publicRoutes = (
  <Switch>
    <AuthenticatedRoute exact path="/admin" component={Admin}/>
    <AuthenticatedRoute exact path="/admin/" component={Admin}/>
    <NonAuthenticatedRoute exact path="/login" component={LoginPage}/>
    <NonAuthenticatedRoute component={LoginPage}/>
  </Switch>
)
