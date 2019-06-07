import React, { Component } from "react";
import axios from "axios";
import Journals from "../components/Journals";

const journalsUrl = `http://localhost:8001/journals`;

export default class JournalCtrl extends Component {
  state = {
    journals: [],
    story: []
  };
  componentDidMount() {
    axios.get(journalsUrl).then(journal => {
      const newJournal = journal.data.map(journalList => {
        return {
          id: journalList.id,
          sub: journalList.subtitle,
          name: journalList.name,
          title: journalList.title,
          picture: journalList.picture,
          description: journalList.description
        };
      });
      // const mainVideoUrl = `http://localhost:5000/video/videos/${
      //   video.data[0].id
      //   }`;
      // console.log(mainVideoUrl);
      // axios.get(mainVideoUrl).then(response => {
      //   this.setState({
      //     mainVideo: response.data,
      //     videos: newVideos
      //   });
      // });
      console.log(newJournal);
      this.setState({
        journals: newJournal
      });
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="journals">
        {this.state.journals.map(journal => (
          <Journals
            id={journal.id}
            sub={journal.sub}
            title={journal.title}
            image={journal.picture}
            description={journal.description}
          />
        ))}
      </div>
    );
  }
}
