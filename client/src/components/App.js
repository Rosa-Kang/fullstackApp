import React, { Component } from "react";
import "../styles/App.css";

export default class App extends Component {
  // state = {
  //   photos: []
  // };
  // componentDidMount() {
  //   axios.get(photoUrl).then(photo => {
  //     console.log(photo.data);
  //     const newPhotos = photo.data.map(photoList => {
  //       return {
  //         id: photoList.id,
  //         title: photoList.title,
  //         likes: photoList.likes,
  //         image: photoList.thumb,
  //         profile: photoList.profile,
  //         username: photoList.username
  //       };
  //     });
  //     this.setState({
  //       photos: newPhotos
  //     });
  //   });
  // }

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
    return <div className="App" />;
  }
}
