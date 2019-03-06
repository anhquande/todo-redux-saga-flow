import { LogInRoutine, LogOutRoutine } from './routines'
import { watch } from '../baseSaga'

export default [watch(LogInRoutine), watch(LogOutRoutine)]
