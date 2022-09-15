import {useEffect, useState} from "react";

const useValidation = (value: any, validations: any) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [minLengthError, setMinLengthError] = useState<boolean>(false);
  const [isNumberError, setIsNumberError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isCheckedError, setIsCheckedError] = useState<boolean>(false);
  const [inputsValid, setInputsValid] = useState<boolean>(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break;
        case 'isNumber':
          const re = /^[0-9]{6,10}$/;
          re.test(String(value)) ? setIsNumberError(false) : setIsNumberError(true)
          break;
        case 'isEmail':
          let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          email.test(String(value).toLowerCase()) ? setIsEmailError(false) : setIsEmailError(true);
          break;
        case 'isChecked':
          value ? setIsCheckedError(false) : setIsCheckedError(true);
          break;
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmailError || isNumberError || isEmpty || minLengthError || isCheckedError) {
      setInputsValid(false)
    } else {
      setInputsValid(true);
    }
  }, [isEmailError, isNumberError, isEmpty, minLengthError, isCheckedError])

  return {isEmpty, minLengthError, isNumberError, isEmailError, inputsValid, isCheckedError}
}

export const useInput = (initialValue: any, validation: any) => {
  const [value, setValue] = useState<any>(initialValue)
  const [isDirty, setIsDirty] = useState<boolean>(false)
  const valid = useValidation(value, validation)

  const onChange = (e: { target: HTMLInputElement | HTMLSelectElement}) => {
    setValue(e.target.value)
  }
  const onChangeChecked = (e: { target: {checked: boolean}}) => {
    setValue(e.target.checked)
  }
  const onBlur = (e: { target: HTMLInputElement | HTMLSelectElement}) => {
    setIsDirty(true)
  }

  return {
    value, onChange, onChangeChecked, onBlur, isDirty, ...valid
  }
}
