import React, { useState } from "react";
import axios from "axios";
import "./SongDetails.css";
import {useHistory} from "react-router-dom";

const SongDetails = ({ title, artist, length, id, isFavorite, pid }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const [isFavorited, setIsFavorited] = useState({ isFavorite });
  let history = useHistory();

  const removeSong = async () => {

    const response = await axios({
      // url: `http://localhost:3000/playlists/${pid}`,
      url: `https://spudify-app.herokuapp.com/playlists/${pid}`,
      method: "PUT",
      data: {song_id: id}
    });
    setIsRemoved(true);
    // history.push(`/discover`)
  };

  if (isRemoved) {
    console.log("removed from playlist!");
  }

  const toggleFavorite = () => {
    axios({
      url: `https://spudify-app.herokuapp.com/songs/${id}`,
      method: "PUT",
      data: { isFavorite: isFavorited },
    })
      .then(() => setIsFavorited(!isFavorited))
      .catch(console.error);
    console.log(isFavorited);
  };

  return (
    <div>
      <div className="big-song-container">
      <div className="song-container-left">
        <p className="title">{title}</p>
        <p className="artist">{artist}</p>
        </div>
        <div className="song-container-right">
        <p className="length">{length}</p>
      <p className="heart" onClick={toggleFavorite}>
        &hearts;
      </p>
      <p className="remove" onClick={removeSong}>X</p>
      </div>
      </div>
    </div>
  );
};

export default SongDetails;
