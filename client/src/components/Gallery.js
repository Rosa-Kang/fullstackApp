import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Gallery extends Component {
  render() {
    return (
      <div className="masonry">
        <img id="profile" src={this.props.username} alt="profile" />
        <Link to={`/photos/${this.props.id}`}>
          <img id="image" src={this.props.image} alt="thumbnail" />
        </Link>
      </div>
    );
  }
}
