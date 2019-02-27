import { makeStyles, useTheme } from '@material-ui/styles'

export function useClasses(styles){
  const theme = useTheme()
  const useStyles = makeStyles(styles(theme))
  return useStyles()
}
