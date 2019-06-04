import React, { Component } from "react";
import Gallery from "../components/Gallery";

export default class GalleryCtrl extends Component {
  render() {
    console.log(this.props.photos);
    return (
      <div className="masonry-wrapper">
        {this.props.photos.map(photo => (
          <Gallery
            profile={photo.profile}
            image={photo.image}
            id={photo.id}
            username={photo.username}
            likes={photo.likes}
          />
        ))}
      </div>
    );
  }
}
