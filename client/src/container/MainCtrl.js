import React, { Component } from "react";
import axios from "axios";
import Slider from "../myFunc/Slider";
import JournalsCtrl from "../container/JournalCtrl";

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
      const newMains = sortedMains.slice(0, 10);
      this.setState({
        mains: newMains
      });
    });
  }
  render() {
    return (
      <>
        <Slider images={this.state.mains} />
        <JournalsCtrl />
      </>
    );
  }
}
