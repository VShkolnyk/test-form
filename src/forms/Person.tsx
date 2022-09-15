import React, {useState} from "react";
import DivForm from "../components/DivForm";
import InputField from "../components/InputField";
import CheckedForm from "../components/CheckedForm";
import Buttons from "../components/Buttons";
import {userSlice} from "../store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {countries} from "../constants/constants";
import PolicyInfo from "../components/PolicyInfo";
import {useInput} from "../hooks/custom";

const Person = () => {

  const {goBackToCompanyInfo, expandInfo, successForm} = userSlice.actions;
  const dispatch = useAppDispatch();
  const {isExpandInfo, person, company} = useAppSelector(state => state.userReducer)

  const name = useInput(person.name, {isEmpty: true, minLength: 3})
  const surname = useInput(person.surname, {isEmpty: true, minLength: 3})
  const jobTitle = useInput(person.jobTitle, {isEmpty: true, minLength: 3})
  const email = useInput(person.name, {isEmpty: true, isEmail: false})
  const phone = useInput(person.name, {isEmpty: true, isNumber: false})
  const firstCheckBox = useInput(false, {isChecked: false})
  const secondCheckBox = useInput(false, {isChecked: false})

  const getCode = () => {
    return countries.filter(item => item.country === company.country)[0];
  }
  const [countryCode, setCountryCode] = useState<string | number>(getCode().code);

  const backButton = (isExpand: boolean) => {
    if (isExpand) {
      dispatch(expandInfo());
    } else {
      dispatch(goBackToCompanyInfo());
    }
  }

  return (
    <DivForm height={'auto'}>
      {!isExpandInfo ?
        <div className="formName">
          <h6>Contact person</h6>
          <div className="formContainer">
            <InputField
              value={name.value}
              style={{
                border: (name.isDirty && name.minLengthError) || (name.isDirty && name.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: { target: HTMLInputElement}) => name.onChange(e)}
              onBlur={(e: { target: HTMLInputElement}) => name.onBlur(e)}
              type={"text"}
              id={"name"}>
              Name
            </InputField>
            <InputField
              value={surname.value}
              style={{
                border: (surname.isDirty && surname.minLengthError) || (surname.isDirty && surname.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: { target: HTMLInputElement}) => surname.onChange(e)}
              onBlur={(e: { target: HTMLInputElement}) => surname.onBlur(e)}
              type={"text"}
              id={"surname"}>
              Surname
            </InputField>
            <InputField
              value={jobTitle.value}
              style={{
                border: (jobTitle.isDirty && jobTitle.minLengthError) || (jobTitle.isDirty && jobTitle.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: { target: HTMLInputElement}) => jobTitle.onChange(e)}
              onBlur={(e: { target: HTMLInputElement}) => jobTitle.onBlur(e)}
              type={"text"}
              id={"jobTitle"}>
              Job title
            </InputField>
            <InputField
              value={email.value}
              style={{
                border: (email.isDirty && email.isEmailError) || (email.isDirty && email.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: { target: HTMLInputElement}) => email.onChange(e)}
              onBlur={(e: { target: HTMLInputElement}) => email.onBlur(e)}
              type={"email"}
              id={"email"}>
              E-mail address
            </InputField>
            <div className={'divRow'}>
              <div className="form-floating person-floating">
                <select value={countryCode} onChange={(e: {target: HTMLSelectElement}) => setCountryCode(e.target.value)} className="form-select" id="floatingSelect" aria-label="Country code">
                  {countries.map(country => {
                    return <option value={country.code}>{country.code}</option>
                  })}
                </select>
                <label className="labelSize" htmlFor="floatingSelect">Country code</label>
              </div>
              <InputField
                value={phone.value}
                className={"smallerInput"}
                style={{
                  border: (phone.isDirty && phone.isNumberError) || (phone.isDirty && phone.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
                }}
                onChange={(e: { target: HTMLInputElement}) => phone.onChange(e)}
                onBlur={(e: { target: HTMLInputElement}) => phone.onBlur(e)}
                type={"text"}
                id={"phone"}>
                Phone No.
              </InputField>
            </div>
            <CheckedForm
              style={{
                border: (firstCheckBox.isDirty && firstCheckBox.isCheckedError) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: any) => firstCheckBox.onChangeChecked(e)}
              onBlur={(e: any) => firstCheckBox.onBlur(e)}
              value={firstCheckBox.value}
              id={'firstCheckBox'}/>
            <CheckedForm
              style={{
                border: (secondCheckBox.isDirty && secondCheckBox.isCheckedError) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: any) => secondCheckBox.onChangeChecked(e)}
              onBlur={(e: any) => secondCheckBox.onBlur(e)}
              value={secondCheckBox.value}
              id={'secondCheckBox'}/>
            <div className="buttons">
              <Buttons onClick={() => backButton(isExpandInfo)} background={'white'}>Back</Buttons>
              <Buttons disabled={
                !name.inputsValid
              || !surname.inputsValid
              || !jobTitle.inputsValid
              || !email.inputsValid
              || !phone.inputsValid
              || firstCheckBox.isCheckedError
              || secondCheckBox.isCheckedError
              } color={'white'} onClick={() => dispatch(successForm({
                name: name.value,
                surname: surname.value,
                jobTitle: jobTitle.value,
                email: email.value,
                countryCode,
                phoneNumber: phone.value,
              }))}>Next</Buttons>
            </div>
          </div>
        </div> : <PolicyInfo/>}
    </DivForm>
  )
}

export default Person;
