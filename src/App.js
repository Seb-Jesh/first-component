import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import ProductsAirtel from "./ProductsAirtel";
import MTNNormalData from "./MTNNormalData";
import MTNRouter from "./MTNRouter";
import MTNMifi from "./MTNMifi";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <Home />
              </React.Fragment>
            )}
          />
          <Route path="/mtn" component={MTNNormalData} />
          <Route path="/mtnmifi" component={MTNMifi} />
          <Route path="/mtnrouter" component={MTNRouter} />
          <Route path="/airtel" component={ProductsAirtel} />
        </div>
      </Router>
    );
  }
}

export default App;
