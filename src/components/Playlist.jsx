import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import axios from "axios";
import "./Playlist.css";
import Form from "./Form";

const Playlist = (props) => {
  const [playlist, setPlaylist] = useState([]);
  const [songsArr, setSongsArr] = useState([])


  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `http://spudify-app.herokuapp.com/playlists/${props.match.params.id}`
        );
        setPlaylist(response.data)
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `http://spudify-app.herokuapp.com/playlists/${props.match.params.id}`
        );
        // console.log("Songs - useEffect - ", response);
        setSongsArr(response.data.songs)
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  if (playlist) {
    const songs = songsArr.map((el) => (
      <SongDetails
        key={el.id}
        id={el.id}
        title={el.title}
        artist={el.artist}
        isFavorite={el.isFavorite}
        length={el.length}
        pid={props.match.params.id}
      />
    ));

    return (
      <div>
        <img src={playlist.img}/>
        <h1>{playlist.title}</h1>
        <h3>{playlist.description}</h3>
        {songs}
        <Form pid={playlist.id}/>
      </div>
    );
  } else {
    return <h3>Serving up some goodness...</h3>;
  }
};

export default Playlist;

//Map over data - return song details component
//
