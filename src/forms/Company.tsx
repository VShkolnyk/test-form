import React from "react";
import InputField from "../components/InputField";
import DivForm from "../components/DivForm";
import Buttons from "../components/Buttons";
import {userSlice} from "../store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {countries} from "../constants/constants";
import {useInput} from "../hooks/custom";


const Company = () => {

  const {goToPersonalInfo} = userSlice.actions;
  const {company} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch();

  const companyCode = useInput(company.companyCode, {isEmpty: true, isNumber: false})
  const companyName = useInput(company.companyName, {isEmpty: true, minLength: 3})
  const country = useInput(company.country, {isEmpty: true})

  return (
    <DivForm>
      <div className="formName">
        <h6>Company</h6>
        <div className="formContainer">
          <InputField
            style={{
              border: (companyCode.isDirty && companyCode.isNumberError) || (companyCode.isDirty && companyCode.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
            }}
            value={companyCode.value}
            onChange={(e: { target: HTMLInputElement}) => companyCode.onChange(e)}
            onBlur={(e: { target: HTMLInputElement}) => companyCode.onBlur(e)}
            type={"text"}
            id={"companyCode"}>
            Company Code
          </InputField>
          <InputField
            style={{
              border: (companyName.isDirty && companyName.isEmpty) || (companyName.isDirty && companyName.minLengthError) ? '1px solid red' : '1px solid #CCCCCC'
            }}
            value={companyName.value}
            onChange={(e: { target: HTMLInputElement}) => companyName.onChange(e)}
            onBlur={(e: { target: HTMLInputElement}) => companyName.onBlur(e)}
            type={"text"}
            id={"companyName"}>
            Company Name
          </InputField>
          <div className="form-floating">
            <select
              style={{
                border: (country.isDirty && country.isEmpty) ? '1px solid red' : '1px solid #CCCCCC'
              }}
              onChange={(e: { target: HTMLSelectElement}) => country.onChange(e)}
              onBlur={(e: { target: HTMLSelectElement}) => country.onBlur(e)}
              value={country.value}
              className="form-select"
              id="floatingSelect"
              aria-label="Country of registration">
              <option value=""></option>
              {countries.map(country => {
                return <option value={country.country}>{country.country}</option>
              })}
            </select>
            <label className="labelSize" htmlFor="floatingSelect">Country of registration</label>
          </div>
          <div className="buttons">
            <Buttons background={'white'}>Back</Buttons>
            <Buttons disabled={!companyCode.inputsValid || !companyName.inputsValid || !country.inputsValid} onClick={() => dispatch(goToPersonalInfo(
              {companyCode: companyCode.value, companyName: companyName.value, country: country.value}
            ))} color={'white'}>Next</Buttons>
          </div>
        </div>
      </div>
    </DivForm>
  )
}

export default Company;
