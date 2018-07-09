import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class AddQuote extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: {},
      isShown: false
    }
  }

  showResponse = (event) => {
    this.setState({isShown: true})
  }
  
  editResponse = (event) => {
    this.setState({isShown: false})
    console.log("editresp")
  }

  deleteResponse = (event) => {
    console.log('etargetid', event.target.id)
    const url = `https://lotripsum.herokuapp.com/books/${event.target.id}`

    fetch(url, {
        method: 'delete',
      })
      .then(resp => resp.json())
      .then(quote => {
        console.log('didthisdelete', quote)
        this.setState({
          quote
        })

      })
      .catch(function (error) {
        console.log('error')
      })
  }

  post = (data) => {
    // console.log('data', data)
    const url = `https://lotripsum.herokuapp.com/books`
    let content = {
      quote: data.quote,
    }
    
  fetch(url, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({quote: res.quote})
    })
    .catch(function (error) {
      console.log('error')
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("hi")
    this.post(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: {quote: event.target.value}
    })
  }

  render() {
    return(
      // <Form onSubmit={this.handleSubmit}>
      <Form>
        <Form.Field>
          <Form.Field>
            <h2 className="Blippo">New Quote</h2>
            {!this.state.isShown ? <input name="quote" value={this.state.quote.quote} onChange={this.handleChange} placeholder='Insert your quote here' /> : null}
          </Form.Field>
        </Form.Field>
        {/* add */}
        <Button onClick={this.showResponse} id="submit-button" type="submit" color="green">Add</Button>
        {/* quotes */}
        {this.state.isShown ? <Segment className="Segment"> <p className="Blippo">{this.state.quote.quote}</p></Segment> : null}
        {/* edit */}
        {this.state.isShown ? <Button onClick={this.editResponse && this.handleSubmit} id="edit-button" type="submit" color="green">Edit</Button> : null}
        {/* delete */}
        {this.state.isShown ? <Button onClick={this.deleteResponse} id="delete-button" color="red">Delete</Button> : null}
      </Form>
    )
  }
}

export default AddQuote