import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const booksURL = 'https://lotripsum.herokuapp.com/books'
const moviesURL = 'https://lotripsum.herokuapp.com/movies'

export default class ManageQuotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
      booksAreLoaded: false,
      moviesAreLoaded: false,
      books: [],
      movies: [],
      editShown: false,
      addShown: false, 
    }
  }
  componentDidMount(){
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
  showResponse = (event) => {
    this.setState({isShown: true})
  }  
  editResponse = (event) => {
    const url = `https://lotripsum.herokuapp.com/books/${event.target.id}`
    let content = {
      id: event.target.id,
      quote: this.state.name
    }
    fetch(url, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(content)
      })
      .then(res => res.json())
      .then(books => {
        this.setState({
          books
        })
      })
      .catch(function (error) {
        console.log('error')
      })
  }
  revealEdit = () => {
    this.setState({
      editShown: true
    })
  }
  deleteResponse = (event) => {
    const url = `https://lotripsum.herokuapp.com/books/${event.target.id}`
    fetch(url, {
        method: 'delete',
      })
      .then(res => res.json())
      .then(books => {
        this.setState({
          books
        })
      })
      .catch(function (error) {
        console.log('error')
      })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.editResponse(event)
    // console.log(event.target.id)
    // console.log("this.state.name", this.state.name)
    // this.post(this.state)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  showAdd = () => {
    this.setState({
      addShown: true
    })
  }
  addSubmit = (event) => {
    event.preventDefault()
    console.log("ADDSUBMIT FIRING")
    this.post(this.state)
  }
  post = (data) => {
    const url = `https://lotripsum.herokuapp.com/books`
    let content = {
      quote: data.name,
    }
    console.log('DATA', data)
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    // .then(res => {
    //   this.setState({quote: res.quote})
    // })
    .catch(function (error) {
      console.log('error')
    })
  }
  render() {
    const booksAreLoaded = this.state.booksAreLoaded
    const moviesAreLoaded = this.state.moviesAreLoaded
    return(
      <div id="scroll-view">
        {booksAreLoaded && this.state.books.quote.map((data, index) => {
          return(
            <div>
              <Button id={data.id} onClick={this.deleteResponse} color='red'>Boromir</Button>
              <Button onClick={this.revealEdit} color='green'>Edit</Button>
              {this.state.editShown && 
                <Form id={data.id} onSubmit={this.handleSubmit}>
                  <Form.Input id={data.id} name='name' value={this.state.name} onChange={this.handleChange} />
                  <Button>Submit</Button>
                </Form>}
              <p>{data.quote}</p>
            </div>
          )
        }
        )}
        {moviesAreLoaded && this.state.movies.quote.map((data, index) => {
          return(
            <div>
              <Button id={data.id} onClick={this.deleteResponse} color='red'>Boromir</Button>
              <Button onClick={this.editResponse} color='green'>Edit</Button>
              <p>{data.quote}</p>
            </div>
          )
        }
        )}
        {!this.state.addShown && 
        <Button color='yellow' onClick={this.showAdd}>Add Quote</Button>}
        {this.state.addShown && 
          <Form onSubmit={this.addSubmit}>
            <Form.Input name="name" onChange={this.handleChange}></Form.Input>
            <Button>Submit</Button>
          </Form>
          }
      </div>         
    )
  }
}