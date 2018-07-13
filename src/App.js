import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Generator from './components/Generator'
import ManageQuotes from './components/ManageQuotes'
// import Landing from './components/Landing'

// import EditQuote from './components/EditQuote'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              {/* <Route exact path="/" component={Landing} /> */}
              <Route exact path="/manage" component={ManageQuotes}/>
              <Route exact path="/generator" component={Generator}/>
              {/* <Route exact path="/edit" component={EditQuote}/> */}
            </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App