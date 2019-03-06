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

export const TagNativeForm = props => {
  const {
    handleSubmit,
    values: { name },
    errors,
    touched,
    handleChange,
    isValid,
    dirty,
    setFieldTouched,
  } = props

  const { t } = useTranslation()

  const changeField = (fieldName, e) => {
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

  const handleChangeName = changeField.bind(null, "name")

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
              {t('tags')}
            </Typography>
          </div>
          <div>
            <TextField
              id="title"
              name="name"
              helperText={touched.name ? errors.name : "(required)"}
              error={touched.name && Boolean(errors.name)}
              label={t('placeHolder:tag.name')}
              value={name}
              onChange={handleChangeName}
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



export function TagForm({ handleSubmit }) {
  const { t, i18n } = useTranslation()

  const validationSchema = Yup.object({
    name: Yup.string(t('placeHolder:tag.name'))
    .required(t('requiredMessage:tag.name')),
  })

  const initialValues = { name: "" }

  const onSubmit = async (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
    try {
      resetForm(initialValues)
      setStatus({success: true})
      setSubmitting(false)
      const {name} = values
      handleSubmit(name)
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
        render={props => <TagNativeForm handleSubmit {...props}/>}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        onReset={console.log("TagForm Reset")}
        handleBlur={handleBlur}
      />
    </React.Fragment>
  )
}
