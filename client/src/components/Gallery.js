import React, { Component } from "react";
import { Link } from "react-router-dom";
import Likes from "../assets/icon/SVG/heart.png";

export default class Gallery extends Component {
  render() {
    console.log(this.props.likes);
    return (
      <div className="masonry">
        <div className="masonry__profile">
          <img id="profile" src={this.props.profile} alt="profile" />
          <h4>{this.props.username}</h4>
        </div>
        <div className="masonry__image">
          <Link
            className="masonry__image--imageLink"
            to={`/photos/${this.props.id}`}
          >
            <img id="image" src={this.props.image} alt="thumbnail" />
          </Link>
          <div className="masonry__image--likes">
            <img id="likes" src={Likes} alt="likes" />
            <h4 className="num">{this.props.likes}</h4>
          </div>
          <div className="masonry__image--profile">
            <img id="profile" src={this.props.profile} alt="profile" />
            <h4>{this.props.username}</h4>
          </div>
        </div>
      </div>
    );
  }
}
