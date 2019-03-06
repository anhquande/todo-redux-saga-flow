// @flow
import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'
import * as Yup from "yup"
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import { Prompt } from 'react-router'

function useDirtyForm(onUnload, dirty){

  useEffect( ()=>{
    window.removeEventListener('beforeunload',onUnload)
    window.addEventListener('beforeunload', onUnload)
    return ()=>{
      window.removeEventListener('beforeunload',onUnload)
    }
  },[dirty])
}

export const TodoNativeForm = (props:{handleSubmit:Function,values:{title:string,note:string}, errors:{title:string, note:string}, touched:{title:string,note:string}, handleChange:Function, isValid:boolean, dirty:boolean, setFieldTouched:Function}) => {
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
       <Prompt
         when={dirty}
         message={location =>
           `Changes you made may not be saved. Are you sure you want to go to ${location.pathname}`
         }
       />

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


export function TodoForm({ handleSubmit }: {handleSubmit:(title:string,note:string)=>void}) {
  const initialValues = { title: "", note: "" }

  const onSubmit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
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
  }

  return (
    <React.Fragment>
      <Formik
        render={props => <TodoNativeForm handleSubmit {...props}/>}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        onReset={console.log("Todo Formik reset")}
        handleBlur={handleBlur}
      />
    </React.Fragment>
  )
}
