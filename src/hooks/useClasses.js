import { makeStyles, useTheme } from '@material-ui/styles'

export function useClasses(styles){
  const theme = useTheme()
  console.log("theme = ",theme)
  const useStyles = makeStyles(styles(theme))
  return useStyles()
}
