import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { blueGrey, green, white } from '@material-ui/core/colors'

export default function createAppTheme(options: ThemeOptions) {
  const menuBg = blueGrey[900]
  const menuColor = blueGrey[100]

  const menuBgHover = blueGrey[800]
  const menuColorHover = blueGrey[50]

  return createMuiTheme({
    app:{
      drawer: {
        minWidth: 74,
        maxWidth: 240,
      },
      sidebar: {
        menuItem: {
          color: menuColor,
          backgroundColor: menuBg,

          hover: {
            color: menuColorHover,
            backgroundColor: menuBgHover,
          },

          active: {
            color: menuColorHover,
            backgroundColor: menuBgHover,
          }
        }
      }
    },
    ...options,
  })
}
