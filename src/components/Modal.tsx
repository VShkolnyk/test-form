import React from "react";
import {userSlice} from "../store/reducers/UserSlice";
import {useAppDispatch} from "../hooks/redux";

const Modal = () => {

  const {openModal} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div id={"modal"}>
      <div className={'modalHeader'}>
        <h6>Contact Us</h6>
        <div style={{cursor: "pointer"}} onClick={() => dispatch(openModal())}>^</div>
      </div>
      <div>
        <span className={'link'}>See how we process personal data</span>
      </div>
      <div>
        <span>Virtual assistant <div className={'assistantStatus'} /></span>
      </div>
      <div className={'someInfo'}>
        <p>Hi!</p>
        <p>Our virtual assistant is chatting with you right now. It can provide quick answer to you questions
          regarding our products and services and, if necessary, connect you with one of our advisers.</p>
        <p>How can we help you today?</p>
      </div>
      <div>
        <span>Contact us directly via email or phone:</span>
      </div>
      <button className={'modalButton'}>+370 685 24435</button>
      <button className={'modalButton'}>info@smefinance.it</button>

      <div className={'sendInput'}>
        <div>
          <p>
            Write your question here
          </p>
          <input type="text" placeholder={'01/140'}/>
        </div>
        <div className={'sendImage'}>
          <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-5/177800/248-512.png"/>
        </div>
      </div>
    </div>
  )
}

export default Modal;
