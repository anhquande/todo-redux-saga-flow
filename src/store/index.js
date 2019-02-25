// @flow
import { createStore } from 'redux'
import type { Store } from '../types'
import reducers from '../reducers'

const store: Store = createStore(
  reducers,
  // Add more reducers here
)

export default store
