// @flow
import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import * as Yup from "yup"
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import { useTranslation } from 'react-i18next'

function useDirtyForm(onUnload, dirty){

  useEffect( ()=>{
    console.log("addEventListener beforeunload...")
    window.removeEventListener('beforeunload',onUnload)
    window.addEventListener('beforeunload', onUnload)
    return ()=>{
      console.log("removeEventListener beforeunload...")
      window.removeEventListener('beforeunload',onUnload)
    }
  },[dirty])
}

export const TodoNativeForm = props => {
  const {
    handleSubmit,
    values: { title, note },
    errors,
    touched,
    handleChange,
    isValid,
    dirty,
    setFieldTouched,
  } = props

  const { t, i18n } = useTranslation()

  const change = (fieldName, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(fieldName, true, false)
  }

  function handleOnUnload(event){
    if (dirty){
      // Cancel the event as stated by the standard.
      event.preventDefault()
      // Chrome requires returnValue to be set.
      event.returnValue = ''
      return false
    }

    return false
  }

  useDirtyForm(handleOnUnload, dirty)

  const handleChangeTitle = change.bind(null, "name")
  const handleChangeNote = change.bind(null, "note")

  return (
    <form onSubmit={(params) => {
      handleSubmit(params)
    }}
    >
      <div>
        <div>
          <div>
            <Typography color="textSecondary" gutterBottom>
              {t('what.are.you.doing.today')}
              {dirty && (
                <>Dirty</>
              )}
            </Typography>
          </div>
          <div>
            <TextField
              id="title"
              name="title"
              helperText={touched.title ? errors.title : "(required)"}
              error={touched.title && Boolean(errors.title)}
              label="Title"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>
          <div>
            <TextField
              id="note"
              name="note"
              helperText={touched.note ? errors.note : "(optional)"}
              error={touched.note && Boolean(errors.note)}
              label="Note"
              value={note}
              onChange={handleChangeNote}
            />
          </div>
        </div>

        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}

const validationSchema = Yup.object({
  title: Yup.string("Enter task title")
  .required("Task title is required"),
})


export function TodoForm({ handleSubmit }) {
  const initialValues = { title: "", note: "" }

  const onSubmit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
    console.log("onSubmit: ",values)
    try {
      resetForm(initialValues)
      setStatus({success: true})
      setSubmitting(false)
      const {title, note} = values
      handleSubmit(title, note)
    } catch (error) {
      setStatus({success: false})
      setSubmitting(false)
      setErrors({submit: error.message})
    }
  }

  function handleBlur(e:any) {
    console.log("handleBlur: ",e)
  }

  console.log("TODOFORM is rendered")
  return (
    <React.Fragment>
      <Formik
        render={props => <TodoNativeForm handleSubmit {...props}/>}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        onReset={console.log("Formik reset")}
        handleBlur={handleBlur}
      />
    </React.Fragment>
  )
}
