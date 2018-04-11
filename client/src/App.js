import React, { Component } from "react";
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReaderList from "./components/ReaderList";
import SingleReader from "./components/SingleReader";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <Body>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={ReaderList} />
              <Route path="/readers/:id" component={SingleReader} />
            </Switch>
          </div>
        </Router>
      </Body>
    );
  }
}

export default App;

const Body = styled.div`
width: 100vw;
`
