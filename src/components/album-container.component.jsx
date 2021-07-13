import React from "react";
import AlbumInfo from "./album-info.component";
import AlbumTracks from "./album-tracks.component";

class AlbumContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
    show: false,
  };
  toggle = () => {
    console.log("toggle");
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="album-container">
        <div className="album-content">
          <AlbumInfo album={this.props.album} />
        </div>
        <div className="buttonCentered">
          <button className="button" onClick={this.toggle}>
            Show/Hide Tracks
          </button>
        </div>
        <div>
          {this.state.show && <AlbumTracks tracks={this.props.album.tracks} />}
        </div>
      </div>
    );
  }
}

export default AlbumContainer;
