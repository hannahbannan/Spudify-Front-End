import React, { useState, useEffect } from "react";
import "./Discover.css";
import {Link} from "react-router-dom";

const Discover = (props) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch("http://spudify-app.herokuapp.com/playlists");
        const json = await res.json();
        setList(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  if (list) {
    const discover = list.map((el) => {
      return (
        <div className="tile">
          <Link to={`/playlists/${el.id}`}>
            <img src={el.img} alt="album covers" key={el.id} />
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          </Link>
        </div>
      );
    });

    return (
      <div className="discover">
        <h1>Discover</h1>
        {discover}
      </div>
    );
  } else {
    return <h3>Coming right up....</h3>;
  }
};

export default Discover;
