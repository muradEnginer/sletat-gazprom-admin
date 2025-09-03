import { useState, type FormEvent, type ChangeEvent } from 'react'

interface FieldErrors {
  [key: string]: string
}

interface UseFormProps {
  initialValues: Record<string, unknown>
  validate?: (values: Record<string, unknown>) => FieldErrors
  onSubmit: (values: Record<string, unknown>) => void | Promise<void>
}

export const useForm = ({
  initialValues,
  validate,
  onSubmit,
}: UseFormProps) => {
  const [values, setValues] = useState<Record<string, unknown>>(initialValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [touched, setTouched] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleChangeWithName = (name: string) => (value: unknown) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched(true)
    if (!validate || Object.keys(validate(values)).length === 0) {
      setIsSubmitting(true)
      await Promise.resolve(onSubmit(values)).finally(() =>
        setIsSubmitting(false)
      )
    } else {
      setErrors(validate(values))
    }
  }

  const addFields = (fields: Record<string, unknown>) => {
    setValues((prevValues) => ({
      ...prevValues,
      ...fields,
    }))
  }

  const addErrors = (errors: FieldErrors) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }))
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched(false)
  }

  const isValid = values && Object.keys(values).length > 0

  return {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleChangeWithName,
    addErrors,
    addFields,
    reset,
    isValid,
  }
}
