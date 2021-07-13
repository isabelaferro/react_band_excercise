import React from "react";

class ArtistInfo extends React.Component {
  render() {
    return (
      <div className="artist-info">
        <h1>{this.props.name}</h1>
        <h3>{this.props.genre}</h3>
        <h3>{this.props.style}</h3>
      </div>
    );
  }
}

export default ArtistInfo;
