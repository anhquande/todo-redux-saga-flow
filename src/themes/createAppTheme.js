import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { green, white } from '@material-ui/core/colors'
import red from '@material-ui/core/colors/red'
import lightBlue from '@material-ui/core/colors/lightBlue'
import blueGrey from '@material-ui/core/colors/blueGrey'

export default function createAppTheme(options: ThemeOptions) {
  const menuBg = blueGrey[900]
  const menuColor = '#639aaf'

  const menuBgHover = blueGrey[800]
  const menuColorHover = green[50]

  const textColor = '#546e7a'
  return createMuiTheme({

    typography: {
      body1:{
        color: blueGrey[900],
      },
      h6: {
        fontSize: '1.1rem',
      }
    },
    palette: {
      type: 'light',
      primary: blueGrey,
      secondary: lightBlue,
      error: red,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    app: {
      color: {
        text:textColor,
        link: {
          normal: '#0091ea',
          sidebar: '#639aaf',

        },
        topBar: {
          backgroundColor: '#37474f',
        },
        secondTopBar: {
          color:textColor,
          backgroundColor: '#eeeeee'
        },
        sidebar: {
          menuItem: {
            color: menuColor,
            backgroundColor: '#222d32',

            hover: {
              color: menuColorHover,
              backgroundColor: menuBgHover,
            },

            active: {
              color: menuColorHover,
              backgroundColor: menuBgHover,
            }
          }
        },
        menu: {
          section: {
            header: {
              color: '#ceeffb',
              backgroundColor: 'rgba(76,83,87,0.33)'
            }
          }
        },
        table: {
          rowSelected: {
            color: `${textColor}`,
            backgroundColor: '#d3e3ff !important',
          },
          rowOdd: {
            color: textColor,
            backgroundColor: '#fafafb',
          },
          rowEven: {
            color: textColor,
            backgroundColor: '#fff',
          },
          rowHighlight: {
            color: textColor,
            backgroundColor: '#d3e3ff',
          }
        }
      },
      drawer: {
        minWidth: 74,
        maxWidth: 240,
      },
      sidebar: {
        menuItem: {
          color: menuColor,
          backgroundColor: '#222d32',

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
