import React from "react";

class AlbumInfo extends React.Component {
  render() {
    const { title, label, imageUrl, albumYear } = this.props.album;
    return (
      <div className="album-info">
        <div>
          <div>
            <img src={imageUrl} alt="" />
            <h2>{title} </h2>
            <h5>
              {albumYear} / {label}{" "}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumInfo;
