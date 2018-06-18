import React from 'react'
import { Button, Input, Segment } from 'semantic-ui-react'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false,
      quotes: 0,
      quotesArr: ""
    }
  }
  
  printParagraphs = (event) => {
    var arr = []
    for(let i = 0; i < this.state.quotes; i++){
      let quoteGen = this.props.phrases.quotes ? this.props.phrases.quotes[(Math.floor(Math.random() * 23))] : "error"
      arr.push(quoteGen)
    }
    this.setState({
      isHidden: !this.state.isHidden,
      quotesArr: arr
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
        <ul>
          <Input onChange={this.handleChange} name="quotes" value={this.state.quotes}></Input>
          <Button color="yellow" onClick={this.printParagraphs}>Show</Button>
          {this.state.isHidden ? <Segment className="Segment" onScroll={this.visibility} className="visibility"> <p className="Blippo">{this.state.quotesArr}</p></Segment> : null}
          {/* <h3>Submit New Quote</h3> */}
        </ul>
      </main>
    )
  }
}

export default Main