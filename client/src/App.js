import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites.js";
import Homepage from "./components/Homepage.js";
import YourProfile from "./components/Yourprofile.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/Favorite" component={Favorites} exact />
          <Route path="/userprofile" component={YourProfile} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
