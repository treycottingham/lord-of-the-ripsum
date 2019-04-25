import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'semantic-ui-react'

const booksURL = 'https://lotripsum.herokuapp.com/books'

export default class ManageQuotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
      booksAreLoaded: false,
      books: [],
      editShown: false,
      addShown: false, 
    }
  }
  componentDidMount(){
    this.fetchBooks()
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
    .then(res => window.location.reload())
    .catch(function (error) {
      console.log('error')
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.editResponse(event)
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      name: event.target.value
    })
  }
  showAdd = () => {
    this.setState({
      addShown: true
    })
  }
  addSubmit = (event) => {
    event.preventDefault()
    console.log('addsubmit event target name', event.target.name, this.state, 'state')
    this.post(this.state)
  }
  post = (data) => {
    const url = `https://lotripsum.herokuapp.com/books`
    console.log(data.name, 'data.name in post')
    let content = {
      quote: data.name,
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => window.location.reload())
    .catch(function (error) {
      console.log('error')
    })
  }
  revealEdit = (event) => {
    console.log(event.target.id)

    this.setState({
      editShown: true
    })
  }
  generateForm = (event) => {
    const form = 
    <Form id={event.target.id} onSubmit={this.handleSubmit}>
      <Form.Input name='name' value={this.state.name} onChange={this.handleChange} />
      <Button>Submit</Button>
    </Form>
    
    var mountElement = document.getElementById(`${event.target.id}`)
    var boldElement = React.createElement('div', null, form);
    
    ReactDOM.render(boldElement, mountElement);
  }
  deleteResponse = (event) => {
    const url = `https://lotripsum.herokuapp.com/books/${event.target.id}`
    console.log('target id', event.target.id)
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
        console.log('error', error)
      })
  }
  render() {
    const booksAreLoaded = this.state.booksAreLoaded
    return(
      <div id="scroll-view">
        <Button className="Button" color="orange">
          <Link to={`/generator`}>Back</Link>
        </Button>
        {booksAreLoaded && this.state.books.quote.map((data) => {
          return(
            <div key={data.id} id={data.id} className="quotes-div">
              <p className="quotes">{data.quote}</p>
              <Button id={data.id} onClick={this.deleteResponse} color='red'>Delete</Button>
              <Button id={data.id} onClick={this.generateForm} color='green'>Edit</Button>
            </div>
          )
        }
        )}
        {!this.state.addShown && 
        <Button id="add-button" color='yellow' onClick={this.showAdd}>Add Quote</Button>}
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


//fetchBooks
