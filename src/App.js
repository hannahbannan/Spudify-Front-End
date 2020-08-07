import React, { useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist";
import Favorites from "./components/Favorites";
import Discover from "./components/Discover";
import Home from "./components/Home"
import {Link, Route, Switch, Redirect} from "react-router-dom";

function App() {
  const [faveList, setFaveList] = useState([]);

  const handleSubmit = (favesong) => {
    setFaveList([...faveList, favesong]);
  };
  return (
   
   <div className="App">
     <div className="top">
      <Link to="/"><h1 className="header">Spudify</h1></Link>
      <p className="playlist">Songs about potatoes.</p>
      <div className="nav">
        <Link to="/playlists">Discover</Link>
        <Link to="/favorites">Your Favorites</Link>
      </div>
    </div>
     <Switch>
       <Redirect exact from='/' to='/home'/>
       <Route path="/home" component={Home}/>
     <Route path="/playlists/:id" component={Playlist} />
      <Route path="/playlists" component={Discover} />
      <Route path="/favorites" component={Favorites} />
     </Switch>
   </div>
 );
}
export default App;
