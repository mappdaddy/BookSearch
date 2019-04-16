import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import SearchForm from "./SearchForm";
import Card from "./Card";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class SearchContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("Harry Potter");
  }

  searchBooks = query => {
    API.search(query)    
      .then(res => this.setState({ result: res.data }))
      // .then(res => console.log(query))
      .then(res => console.log({BookDetail}))
      .catch(err => console.log(err));      
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });
    // console.log(value);
  };

  // When the form is submitted, search the Google Books API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
    // console.log(this.state.search);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-8">
              <Card
                heading={this.state.result.title || "Search for a Book to Begin"}
              >
                {this.state.result.title ? (
                  <BookDetail
                    // key={result.id}
                    // id={result.id}                  

                    title={this.state.result.volumeInfo.title}
                    src={this.state.result.Poster}
                    authors={this.state.result.volumeInfo.authors}
                    description={this.state.result.volumeInfo.description}
                    released={this.state.result.Released}
                  />
                ) : (
                    <h3>No Results to Display</h3>
                  )}
              </Card>
            </Col>
            <Col size="md-4">
              <Card heading="Search">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchContainer;
