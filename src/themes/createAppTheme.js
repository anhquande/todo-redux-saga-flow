import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

export default function createAppTheme(options: ThemeOptions) {
  return createMuiTheme({
    app:{
      drawer: {
        minWidth: 74,
        maxWidth: 240,
      },
    },
    ...options,
  })
}
