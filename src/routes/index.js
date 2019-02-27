import React from 'react'
import { Route, Switch } from 'react-router'
import { Home } from '../containers/Home'
import { HelpMe } from '../containers/HelpMe'
import { Imprint } from '../containers/Imprint'
import { NoMatch } from '../containers/NoMatch'
import { Todos } from '../containers/todos/Todos'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/help" component={HelpMe}/>
      <Route path="/imprint" component={Imprint}/>
      <Route path="/todos" component={Todos}/>
      <Route component={NoMatch}/>
    </Switch>
  </div>
)


export default routes
