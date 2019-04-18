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
    this.searchBooks('love in the time of cholera')
  }

  searchBooks = query => {
    //replace spaces here
    query = query.replace(/ /g, "_");
    API.search(query).then((res) => {
      this.setState({ result: res.data.items })
      console.log(this.state.result)
    })
    // .catch(err => console.log(err));
    // .then(res => this.setState({ result: res.data }))
    // // .then(res => console.log(res.data ))

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

            <Col size="lg-12" mb='3'>
              <Card heading="Search">
                <SearchForm
                  value={this.state.search}
                  handleInputChange={this.handleInputChange}
                  handleFormSubmit={this.handleFormSubmit}
                />
              </Card>
            </Col>
            <Col size="lg-12" mb='3'>
              <Card
                heading={((this.state.result.length > 0) ? this.state.result[0].volumeInfo.title : "Search for a Book to Begin")}
              >

                {this.state.result.length > 0 ? (
                  this.state.result.map(book => (
                    // console.log(book.id)
                                        
                    <Card className= "margin"
                    heading={book.volumeInfo.title}
                    >
                    <BookDetail 
                    // props = {book}
                      key={book.id}
                      // id={book.id}                  

                      title={book.volumeInfo.title}                   
                      src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : null}
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      
                    />
                    </Card>                   
                    
                  ))
                ) : (
                    <h3>No Results to Display</h3>
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchContainer;