import React from "react";
import ARTIST_DATA from "./ARTIST_DATA";

import ArtistContainer from "./components/artist-container.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ARTIST_DATA;
  }
  render() {
    return (
      <div>
        <div>
          <ArtistContainer artist={this.state.subConsciousMind} />
        </div>
      </div>
    );
  }
}

export default App;
