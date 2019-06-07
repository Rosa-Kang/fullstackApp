import React, { Component } from "react";
import Logo from "../assets/logo/cozny.png";
import { Link } from "react-router-dom";
import Save from "../assets/icon/SVG/saved.png";

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
            <Link to="/">
              <a href="/html/show.html">HOME</a>
            </Link>
          </div>
          <div className="header__right--sub">
            <Link to="/photos">GALLERY</Link>
          </div>
          <div className="header__right--sub">
            <Link to="/journals">JOURNALS</Link>
          </div>
          <div>
            <img src={Save} />
          </div>
        </div>
      </header>
    );
  }
}
