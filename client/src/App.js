import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Yourprofile from "./components/Yourprofile";

// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={"/"}></Route>
      </Switch>
      <Switch>
        <Route exact path="/Yourprofile" component={Yourprofile} />
      </Switch>
    </Router>
  );
}

export default App;
