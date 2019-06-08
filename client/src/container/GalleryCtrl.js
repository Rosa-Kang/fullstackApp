import React, { Component } from "react";
import Gallery from "../components/Gallery";
import axios from "axios";

const photoUrl = `http://localhost:8001/photos`;
export default class GalleryCtrl extends Component {
  state = {
    photos: []
  };
  componentDidMount() {
    axios.get(photoUrl).then(photo => {
      const newPhotos = photo.data.map(photoList => {
        return {
          id: photoList.id,
          title: photoList.title,
          likes: photoList.likes,
          image: photoList.thumb,
          profile: photoList.profile,
          username: photoList.username
        };
      });
      this.setState({
        photos: newPhotos
      });
    });
  }

  likePhoto = photoId => {
    axios.put(`${photoUrl}/${photoId}`).then(response => {
      this.setState({
        photos: this.state.photos.map(photo =>
          photo.id === photoId ? { ...photo, likes: photo.likes + 1 } : photo
        )
      });
    });
  };

  render() {
    return (
      <div className="masonry-wrapper">
        {this.state.photos.map(photo => (
          <>
            <Gallery
              profile={photo.profile}
              title={photo.title}
              image={photo.image}
              id={photo.id}
              username={photo.username}
              likes={photo.likes}
              likePhoto={this.likePhoto}
            />
          </>
        ))}
      </div>
    );
  }
}
