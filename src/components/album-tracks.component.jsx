import React from "react";

class AlbumTracks extends React.Component {
  render() {
    const { tracks } = this.props;
    console.log(tracks);
    return (
      <div className="tracks">
        {tracks.map((track) => (
          <h5 key={track.id}>
            {track.title} - {track.time}
          </h5>
        ))}
      </div>
    );
  }
}

export default AlbumTracks;
