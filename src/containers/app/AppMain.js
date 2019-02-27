import React from 'react'
import routes from '../../routes'

export function AppMain({classes}) {
  return (
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        { routes }
      </main>
  )
}
