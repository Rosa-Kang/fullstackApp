import React, { Component } from "react";
import { Link } from "react-router-dom";
import Likes from "../assets/icon/SVG/heart.png";

export default class Main extends Component {
  render() {
    return (
      <div className="mySlides fade">
        <img className="mySlides" src={this.props.image} alt="thumbnail" />
      </div>
    );
  }
}
