import React from 'react'
import { Switch } from 'react-router'
import { Home } from '../containers/Home'
import { HelpMe } from '../containers/HelpMe'
import { Imprint } from '../containers/Imprint'
import { Todos } from '../containers/todos/Todos'
import { Tags } from '../containers/tags/Tags'
import { LoginPage } from '../containers/login'
import { AuthenticatedRoute } from './AuthenticatedRoute'
import { NonAuthenticatedRoute } from './NonAuthenticatedRoute'
import { Admin } from '../containers/app/Admin'
import { SecureRoute } from './SecureRoute'
import { Logout } from '../containers/login/Logout'
import { PageNotFound } from '../containers/PageNotFound'

export const secureRoutes = (
  <Switch>
    <SecureRoute exact path="/admin" component={Home}/>
    <SecureRoute exact path="/admin/" component={Home}/>
    <SecureRoute path="/admin/help" component={HelpMe}/>
    <SecureRoute path="/admin/imprint" component={Imprint}/>
    <SecureRoute path="/admin/todos" component={Todos} hasAnyRole={["ROLE_MANAGE_TODO"]}/>
    <SecureRoute path="/admin/tags" component={Tags}/>
    <SecureRoute path="/admin/404" component={PageNotFound}/>
    <SecureRoute component={PageNotFound}/>
  </Switch>
)

export const publicRoutes = (
  <Switch>
    <AuthenticatedRoute path="/admin" component={Admin}/>
    <AuthenticatedRoute path="/admin/" component={Admin}/>
    <AuthenticatedRoute exact path="/logout" component={Logout}/>
    <NonAuthenticatedRoute exact path="/login" component={LoginPage}/>
    <NonAuthenticatedRoute component={LoginPage}/>
  </Switch>
)
