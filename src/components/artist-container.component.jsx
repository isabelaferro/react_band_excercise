import React from "react";

import ArtistInfo from "./artist-info.component";
import AlbumContainer from "./album-container.component";

class ArtistContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  render() {
    const { name, genre, style, albums } = this.props.artist;

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
