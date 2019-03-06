import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import * as Yup from 'yup'
import { Formik } from 'formik'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from "@material-ui/core/InputAdornment"
import NameIcon from "@material-ui/icons/SupervisorAccount"
import LockIcon from "@material-ui/icons/Lock"
import { useDispatch } from 'redux-react-hook'
import { useClasses } from '../../hooks/useClasses'
import { LogInRoutine } from '../../repository/auth/routines'
import { useAuth } from '../../hooks/useReducer'

const validationSchema = Yup.object({
  username: Yup.string('Enter an username')
  .required('Username is required'),
  password: Yup.string('')
  .min(4, 'Password must contain at least 4 characters')
  .required('Enter your password'),
})

const formStyles = theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  alignRight: {
    display: 'flex',
    alignContent: "flex-end"
  },
  grow: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(),
  },

})

function Form(props) {

  const classes = useClasses(formStyles)

  const {
    values: {
      username, password,
    },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
  } = props

  const change = (name, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }

  return (

    <form onSubmit={handleSubmit}>
      <FormControl margin="normal" required fullWidth>
        <TextField
          id="username"
          name="username"
          helperText={touched.username ? errors.username : ''}
          error={touched.username && Boolean(errors.username)}
          label="Name"
          value={username}
          onChange={change.bind(null, 'username')}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NameIcon/>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <TextField
          id="password"
          name="password"
          helperText={touched.password ? errors.password : ''}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          fullWidth
          type="password"
          onChange={change.bind(null, 'password')}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon/>
              </InputAdornment>
            )
          }}

        />
      </FormControl>

      <FormControl fullWidth={false} margin="normal">
        <Button disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary">Forgot password ?</Button>
      </FormControl>

      <FormControl margin="normal" required fullWidth>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!isValid}
        >
          Sign in
        </Button>

      </FormControl>
    </form>

  )
}

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main,
  },
})

function LoginForm() {
  const classes = useClasses(styles)
  const initialValues = {
    username: '', password: '',
  }

  const auth = useAuth()
  const dispatch = useDispatch()
  const submitValues = ({ username, password }) => {
    dispatch(LogInRoutine.trigger({ username, password }))
  }

  return (
    <React.Fragment>
      <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {!auth.authenticated && auth.error && (
            <Typography variant="h6" color="error">
              {auth.error}
            </Typography>
          )
          }
          <Formik
            render={p => <Form {...p}/>}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitValues}
          />

          <div>
            <Button disableFocusRipple
                    disableRipple
                    style={{ textTransform: "none", textAlign: "center" }}
                    variant="text"
                    color="primary">Register an account</Button>
          </div>

        </Paper>
      </main>
    </React.Fragment>

  )
}

export default LoginForm
