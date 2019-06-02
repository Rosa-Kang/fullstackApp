import React, { Component } from "react";
import "../styles/App.css";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryCtrl from "../controller/GalleryCtrl";

const photoUrl = `https://api.unsplash.com/photos/?client_id=ca97c068a93323c9834dc603947e06792959cee1d06a09b316bfa50ffa1c1679`;

export default class App extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    axios.get(photoUrl).then(photo => {
      const newPhotos = photo.data.map(photoList => {
        return {
          id: photoList.id,
          likes: photoList.likes,
          image: photoList.urls.thumb,
          profile: photoList.sponsorship,
          username: photoList.sponsorship
        };
      });
      this.setState({
        photos: newPhotos
      });
    });
  }

  componentDidUpdate(prevState) {
    if (
      typeof this.props.match.params.id === "undefined" &&
      prevState.location.pathname !== "/"
    ) {
      //console.log('working');
      window.location.reload();
    }
    // console.log(prevState.location.pathname);
    // const photoId = this.props.match.params.id;
    // const currentPhoto = `http://localhost:5000/photo/photos/${photoId}`;

    // axios.get(currentPhoto).then(response => {
    //   if (this.props.match.params.id !== this.state.mainPhoto.id) {
    //     this.setState({
    //       mainPhoto: response.data
    //     });
    //   }
    // });
  }

  render() {
    console.log(this.state.photos);
    return (
      <div className="App">
        <Header />
        <GalleryCtrl photos={this.state.photos} />
        <Footer />
      </div>
    );
  }
}
