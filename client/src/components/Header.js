import React, { Component } from "react";
import Logo from "../assets/logo/cozny.png";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to="/gallery">
            <img src={Logo} />
          </Link>
        </div>
        <div className="header__right">
          <div className="header__right--sub">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="header__right--sub">
            <a href="/html/show.html">Upload</a>
          </div>
        </div>
      </header>
    );
  }
}
