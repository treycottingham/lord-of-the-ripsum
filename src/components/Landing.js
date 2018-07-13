import React from 'react'
import { Button, Input, Segment, Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Link } from "react-router-dom"

export default class Landing extends React.Component {
  render () {
    return (
      <main>
        <Container>
          <h1>Welcome to Lord of the Ripsum</h1>
          <p>This site was created so that developers can fill text areas with their favorite Lord of the Rings quotes.</p>
          <Button className="Button" color="orange">
            <Link to={`/generator`}>Enter</Link>
          </Button>
        </Container>
      </main>
    )
  }
}