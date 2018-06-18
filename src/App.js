import React from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const apiURL = './quotes.json'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      phrases: []
    }
  }

  componentDidMount() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        return this.setState({phrases:data})
      })
  }

  render() {
    return (
        <div className="App">
          <Header />
          <Main phrases={this.state.phrases}/>
          <Footer />
        </div>
    )
  }
}

export default App