import "./App.css";
// import './components/Favorites'
// import './components/Homepage'
// import './components/Yourprofile'
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";


// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
