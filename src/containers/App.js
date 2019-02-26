// @flow
import React from 'react'

import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'
import { AppMain } from './AppMain'

export const App = () => {
  console.log("[App].render")
  return (
    <div>
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </div>
  )
}
