import React, { useState, useEffect } from "react";
import "./Favorites.css";
import SongDetails from "./SongDetails";

const Favorites = (props) => {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch("http://localhost:3000/songs");
        const json = await res.json();
        setSongs(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);


  if (songs) {
    const favorites = songs
      .filter((el) => el.isFavorite === true)
      .map((el) => {
        return (
          <SongDetails
            key={el.id}
            id={el.id}
            title={el.title}
            artist={el.artist}
            isFavorite={el.isFavorite}
            length={el.length}
          />
        );
      });

    return (
      <div className="favorite-songs">
        <h1>Favorites</h1>
        {favorites}
      </div>
    );
  } else {
    return <h3>Heating up your favorites...</h3>;
  }
};
export default Favorites;
