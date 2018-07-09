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
          {/* ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black", "facebook", "google plus", "instagram", "linkedin", "twitter", "vk", "youtube"] */}
            <Link to={`/generator`}>Enter</Link>
          </Button>
        </Container>
      </main>
    )
  }
}

// fetchCompany = () => {
  
  //   const apiURL = 'https://mo-jobs-database.herokuapp.com/company';
  
  //   return fetch(apiURL)
  //     .then(response => response.json())
  //     .then(company => {
    //       this.setState({
      //         company,
      //         isCompanyLoaded: true
      //       })
      //       console.log('insidefetch', this.state.company)
      //     })
      //     .catch((err) => console.log('err', err))
      // }
                        
      // componentDidMount() {
                        //   // this.fetchMovies()
                        //   // this.fetchBooks()
                        //   fetch(booksURL)
                        //     .then(response => response.json())
                        //     .then(data => {
                        //       return this.setState({
                        //         phrases: data,
                        //         isLoaded: true
                        //       })
                        //     })
                        // }