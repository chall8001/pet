import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites.js";
import Homepage from "./components/Homepage.js";
import Yourprofile from "./components/Yourprofile.js";
import CreateProfile from "./components/Auth/CreateProfile.js";
import BannerAd from "./components/BannerAd";
import chatEngine from "./components/chatEngine/chatEngine";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/owners"]}>
            <Homepage />
            <CreateProfile />
          </Route>
          {/* <Route path="/" component={Homepage} exact /> */}
          <Route path="/Favorite" component={Favorites} exact />

          <Route path="/userprofile" component={Yourprofile} exact />
          <Route path="/chatroom" component={chatEngine} exact />
          {/* <CreateProfile /> */}
        </Switch>

        <BannerAd />
      </Router>
    </>
  );
}

export default App;
