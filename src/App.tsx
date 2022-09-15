import React from 'react';
import './styles/App.scss';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import Person from "./forms/Person";
import Company from "./forms/Company";
import {userSlice} from "./store/reducers/UserSlice";
import Modal from "./components/Modal";

function App() {
  const {isGoNext, isOpenModal} = useAppSelector(state => state.userReducer)
  const {openModal} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      {!isGoNext ?
        <Company/> :
        <Person/>
      }
      {!isOpenModal ?
        <div className={"contactUs"} onClick={() => dispatch(openModal())}>
          <img className="image"
               src={"https://seeklogo.com/images/G/google-messages-logo-40D6490A0A-seeklogo.com.png"}/>
        </div>
        :
        <Modal />
      }
    </div>
  )
    ;
}

export default App;
