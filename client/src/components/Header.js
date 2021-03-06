import React, { Component } from "react";
import Logo from "../assets/logo/cozny.png";
import { Link } from "react-router-dom";
import Save from "../assets/icon/SVG/save.png";
import Logout from "../assets/images/logout.jpg";
import Login from "../assets/images/login.jpg";
import LoginCtrl from "../container/LoginCtrl";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, login: Logout };
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  loginFunc = () => {
    this.setState({
      login: Login
    });
  };

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__right">
          <div className="header__right--sub">
            <Link to="/">
              <a id="home" href="/html/show.html">
                HOME
              </a>
            </Link>
          </div>
          <div className="header__right--sub">
            <Link to="/photos">GALLERY</Link>
          </div>
          <div className="header__right--sub">
            <Link to="/journals">JOURNALS</Link>
          </div>
          <Link to="/saved">
            <img id="save" src={Save} alt="save" />
          </Link>
          <div className="header__right--login">
            <img
              id="login"
              src={this.state.login}
              alt="login"
              onClick={this.toggleModal}
            />
            <LoginCtrl
              show={this.state.isOpen}
              onClose={this.toggleModal}
              loginFunc={this.loginFunc}
            />
          </div>
        </div>
      </header>
    );
  }
}
