import React from "react";
import {labelText} from "../constants/constants";
import Buttons from "./Buttons";
import {userSlice} from "../store/reducers/UserSlice";
import {useAppDispatch} from "../hooks/redux";

const PolicyInfo = () => {

  const {expandInfo} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="formName">
      <h6>Contact person</h6>
      <div className="formContainer">
        <div className={'scroll'}>

          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>
          <p className={'form-check-label'}>{labelText}</p>

        </div>
        <div className="buttons">
          <Buttons onClick={() => dispatch(expandInfo())} background={'white'}>Back</Buttons>
        </div>
      </div>
    </div>
  )
}

export default PolicyInfo;
