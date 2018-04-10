import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ReaderList from "./components/ReaderList"
import SingleReader from "./components/SingleReader"
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">

                <div>
                    <h1>Reading Bee</h1>
                    <div>
                        <div><Link to="/">All Reading Bees</Link></div>
                    </div>
                </div>

                <Route exact path="/" component={ReaderList}/>
                <Route path="/readers/:id" component={SingleReader}/>

            </div>
        </Router>
    );
}
}


export default App;
