import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Generator from './components/Generator'
import AddQuote from './components/AddQuote'
import EditQuote from './components/EditQuote'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" component={Generator}/>
              <Route exact path="/add" component={AddQuote}/>
              <Route exact path="/edit" component={EditQuote}/>
            </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App