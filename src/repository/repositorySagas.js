import tagWatchers from './tag/sagas'
import authWatchers from './auth/sagas'

export default [
  ...tagWatchers,
  ...authWatchers
]

