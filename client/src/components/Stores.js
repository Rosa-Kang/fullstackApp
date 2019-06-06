import React, { Component } from "react";
import axios from "axios";

export default class Stores extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="store">
        <img />
        <h4>Item name</h4>
        <h4>Price</h4>
        <h4>Description</h4>
      </div>
    );
  }
}
