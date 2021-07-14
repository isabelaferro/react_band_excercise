import React from "react";
import ARTIST_DATA from "./ARTIST_DATA";

import ArtistContainer from "./components/artist-container.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ArtistContainer artist={ARTIST_DATA} />
        </div>
      </div>
    );
  }
}

export default App;
