import React, { Component } from "react";
import Logo from "../assets/logo/cozny.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div className="header__right">
          <div className="header__right--sub">
            <Link to="/photos">GALLERY</Link>
          </div>
          <div className="header__right--sub">
            <a href="/html/show.html">UPLOAD</a>
          </div>
          <div className="header__right--sub">
            <a href="/html/show.html">JOURNAL</a>
          </div>
          <div className="header__right--sub">
            <a href="/html/show.html">STORE</a>
          </div>
        </div>
      </header>
    );
  }
}
