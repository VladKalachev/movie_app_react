import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

// 65e043c24785898be00b4abc12fcdaae

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = ({ match }) => <p>{match.params.id}</p>;
