import React from "react";
import {labelText} from "../constants/constants";
import {userSlice} from "../store/reducers/UserSlice";
import {useAppDispatch} from "../hooks/redux";

type Checked = {
  id: string;
  value: any;
  onChange: any;
  onBlur: any;
  style?: any;
}

const CheckedForm = ({id, value, onChange, onBlur, style}: Checked) => {

  const {expandInfo} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="form-check mt-3">
      <input className="form-check-input" type="checkbox" onBlur={onBlur} onChange={onChange} style={style} value={value} id={id}/>
      <p className="form-check-label">
        {labelText} <span onClick={() => dispatch(expandInfo())}>Please click to expand</span>
      </p>
    </div>
  )
}

export default CheckedForm;
