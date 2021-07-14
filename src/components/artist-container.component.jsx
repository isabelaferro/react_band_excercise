import React from "react";
import ARTIST_DATA from "../ARTIST_DATA";

import ArtistInfo from "./artist-info.component";
import AlbumContainer from "./album-container.component";

class ArtistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = ARTIST_DATA;
  }
  render() {
    const { name, genre, style, albums } = this.state.subConsciousMind;

    return (
      <div>
        <div className="artist-container">
          <ArtistInfo name={name} genre={genre} style={style} />
          {albums.map((album) => (
            <AlbumContainer key={album.id} album={album} />
          ))}
        </div>
      </div>
    );
  }
}

export default ArtistContainer;
