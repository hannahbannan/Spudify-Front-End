import React, { useState, useEffect } from "react";
import "./Form.css";
import axios from "axios";

const Form = ({ pid }) => {
  const [input, setInput] = useState({ title: "", artist: "", time: "" });
  const [item, setItem] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [songs, setSongs] = useState(null);

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `http://localhost:3000/playlists/${pid}`,
      method: "PUT",
      data: input,
    })
      .then((res) => {
        setItem({ createdItem: res.data.item });
      })
      .catch(console.error);
    setInput({ title: "", artist: "", time: "" });
    setIsSubmitted(true);
  };

  // useEffect(() => {
  //   const makeAPICall = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/songs");
  //       const json = await res.json();
  //       setSongs(json);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   console.log(songs)
  //   const createLog = async () => {
  //     await axios({
  //         url: `http://localhost:3000/logs`,
  //         method: "POST",
  //         data: {  song_id: , playlist_id: pid },
  //       })
  //   }
  //   makeAPICall();
  //   createLog();
  // }, []);

  return (
    <div className="add-song">
      <h1>Add a new song to this playlist</h1>
      <p>**Song must be about potatoes. If it is not, our administrators will remove it from the database.</p>
      <form onSubmit={handleSubmit}>
        <div id="input-container">
          <label className="label">Title</label>
          <input value={input.title} name="title" onChange={handleChange} />
        </div>
        <div id="input-container">
          <label className="label">Artist</label>
          <input value={input.artist} name="artist" onChange={handleChange} />
        </div>
        <div id="input-container">
          <label className="label">Song Length</label>
          <input value={input.length} name="length" onChange={handleChange} />
        </div>
        <button className="add_song_button" type="submit">
          Add New Song
        </button>
      </form>
    </div>
  );
};
export default Form;
