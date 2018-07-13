import React from 'react'
import { Button, Input, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from "react-router-dom";

const booksURL = 'https://lotripsum.herokuapp.com/books'
const moviesURL = 'https://lotripsum.herokuapp.com/movies'

export default class Generator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
      booksAreLoaded: false,
      moviesAreLoaded: false,
      quotes: 0,
      books: [],
      movies: [],
      movieQuotesArr: "",
      bookQuotesArr: "",
    }
  }
  componentDidMount() {
    this.fetchBooks()
    this.fetchMovies()
  }
  fetchBooks = () => {
    return fetch(booksURL)
      .then(response => response.json())
      .then(books => {
        this.setState({
          books: books,
          booksAreLoaded: true
        })
      })
      .catch((err) => console.log('err', err))
  }
  fetchMovies = () => {
    return fetch(moviesURL)
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies,
          moviesAreLoaded: true
        })
      })
      .catch((err) => console.log('err', err))
    }
  printBookQuotes = (event) => {
    var bookQuotes = []
    var quoteMap = this.state.books.quote.map(bookQuote => bookQuote.quote)
    for(let i = 0; i < this.state.quotes; i++){
      let quoteGen = this.state.books.quote ? quoteMap[(Math.floor(Math.random() * 23))] : "error"
      bookQuotes.push(quoteGen)
    }
    this.setState({
      isHidden: !this.state.isHidden,
      bookQuotesArr: bookQuotes
    })
  }
  printMovieQuotes = (event) => {
    var movieQuotes = []
    var quoteMap = this.state.movies.quote.map(movieQuote => movieQuote.quote)
    for (let i = 0; i < this.state.quotes; i++) {
      let quoteGen = this.state.movies.quote ? quoteMap[(Math.floor(Math.random() * 23))] : "error"
      movieQuotes.push(quoteGen)
      }
    this.setState({
      isHidden: !this.state.isHidden,
      movieQuotesArr: movieQuotes
    })
  }
  handleChange = (event) => {
    this.setState({
      isHidden: false,
      [event.target.name] : event.target.value
    })
  }
  render () {
    return (
      <main>
        <h2 className="Blippo">How many quotes do you need?</h2>
        <Container>
          <Input onChange={this.handleChange} name="quotes" value={this.state.quotes}></Input>
          <Button className="Button" color="blue" onClick={this.printBookQuotes}>Book</Button>
          <Button className="Button" color="green" onClick={this.printMovieQuotes}>Movie</Button>
          {this.state.isHidden ? <Segment className="Segment"> <p className="Blippo">{this.state.bookQuotesArr}{this.state.movieQuotesArr}</p></Segment> : null}
        </Container>
        <Container>
          <Button className="Button" color="olive">
            <Link to={`/manage`}>Manage Quotes</Link>
          </Button>
        </Container>
      </main>
    )
  }
}