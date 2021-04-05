import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites.js";
import Homepage from "./components/Homepage.js";
import Yourprofile from "./components/Yourprofile.js";
import CreateUser from "./components/Auth/CreateProfile";
import BannerAd from "./components/BannerAd";
import CustomChatEngine from "./components/chatEngine/CustomChatEngine";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/Favorite" component={Favorites} exact />
            <Route path="/Yourprofile" component={Yourprofile} exact />
            <Route path="/chatroom" component={CustomChatEngine} exact />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
