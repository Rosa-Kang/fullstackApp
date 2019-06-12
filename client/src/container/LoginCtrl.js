import React, { Component } from "react";
import Login from "../assets/images/login.jpg";

const LoginCtrl = ({ show, onClose, loginFunc }) => {
  {
    if (!show) {
      return null;
    }

    return (
      <div className="loginCtrl">
        <div className="loginCtrl__text">
          <h1>Log In</h1>
          <div className="loginCtrl__text--all">
            <div className="loginCtrl__text--all--left">
              <input type="text" name="id" placeholder="Email" />
              <input type="password" name="pw" placeholder="Password" />
              <div id="buttons">
                <button
                  onClick={event => {
                    onClose();
                    loginFunc();
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={event => {
                    onClose();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="loginCtrl__text--all--right">
              <span id="continueF">Continue with Facebook</span>
              <span id="continueI">Continue with Instagram</span>
              <button>Sing In</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default LoginCtrl;
