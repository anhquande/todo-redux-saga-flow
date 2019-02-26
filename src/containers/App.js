// @flow
import React from 'react'

import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'
import { AppMain } from './AppMain'
import { useResponsive } from '../hooks/useResponsive'

export const App = () => {
  useResponsive()
  console.log("[App].render")
  return (
    <div>
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </div>
  )
}
