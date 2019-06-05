import React, { Component } from "react";
import Main from "../components/Main";
import axios from "axios";

const photoUrl = `http://localhost:8001/photos`;

export default class MainCtrl extends Component {
  state = {
    mains: []
  };
  componentDidMount() {
    axios.get(photoUrl).then(main => {
      const mainPhotos = main.data.map(mainList => {
        return {
          id: mainList.id,
          title: mainList.title,
          likes: mainList.likes,
          image: mainList.thumb,
          profile: mainList.profile,
          username: mainList.username
        };
      });
      const sortedMains = mainPhotos.sort(
        (a, b) => parseFloat(b.likes) - parseFloat(a.likes)
      );
      const newMains = sortedMains.slice(0, 5);
      this.setState({
        mains: newMains
      });
    });
  }
  render() {
    return (
      <>
        <div className="slideshow-container">
          {this.state.mains.map(main => (
            <Main
              profile={main.profile}
              image={main.image}
              likes={main.likes}
              id={main.id}
              username={main.username}
              title={main.title}
            />
          ))}
          <a className="prev" onclick={plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onclick={plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <div id="center">
          <span className="dot" onclick="currentSlide(1)" />
          <span className="dot" onclick="currentSlide(2)" />
          <span className="dot" onclick="currentSlide(3)" />
        </div>
        ;
      </>
    );
  }
}
