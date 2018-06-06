import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReaderList from "./components/ReaderList";
import SingleReader from "./components/SingleReader";
import SingleBook from "./components/SingleBook";
import NavBar from "./components/NavBar";
import { injectGlobal } from "styled-components";


injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lobster');
@import url('https://fonts.googleapis.com/css?family=Peddana|Teko|Yanone+Kaffeesatz');
</style>`;



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Body>
              <Route exact path="/" component={ReaderList} />
              <Route exact path="/readers/:id" component={SingleReader} />
              <Route exact
                path="/readers/:readerId/books/:id"
                component={SingleBook}
              />
            </Body>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

const Body = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/r7Pa4NN.png?1");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`;
