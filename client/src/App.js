import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReaderList from './components/ReaderList'
import SingleReader from './components/SingleReader'
import NavBar from './components/NavBar'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ReaderList} />
            <Route path="/readers/:id" component={SingleReader} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App