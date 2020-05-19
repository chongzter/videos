import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

const KEY = "AIzaSyDiJyrHD2ZDSpsXASRjKwXn6DQKRNcufrs";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log("From the App!", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
