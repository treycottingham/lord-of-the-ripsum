import React from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'

const apiURL = 'https://lotripsum.herokuapp.com/books'

export default class EditQuote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotesArr: []
    }
  }

  componentDidMount(){
    this.fetchQuotes()
  }
  
  fetchQuotes = () => {
    return fetch(apiURL)
    .then(response => response.json())
      .then(quotes => {
        this.setState({
          quotesArr: quotes.quote
        })
        console.log('insidefetch', this.state.quotesArr)
      })
      .catch((err) => console.log('err', err))
    }

  render() {
    return(
      <h1>Edit Quotes</h1>
    )
  }
}