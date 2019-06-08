import React, { Component } from "react";
import Logo from "../assets/logo/cozny.png";
import { Link } from "react-router-dom";
import Save from "../assets/icon/SVG/saved.png";
import Login from "../assets/images/login.jpg";

export default class Header extends Component {
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
          <div>
            <img id="save" src={Save} alt="save" />
          </div>
          <div>
            <img id="login" src={Login} alt="login" />
          </div>
        </div>
      </header>
    );
  }
}
