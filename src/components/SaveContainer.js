import React, { Component } from "react";
// import Container from "./Container";
// import Row from "./Row";
// import Col from "./Col";
// import Navbar from "./Navbar";
// import Jumbotron from "./Jumbotron";
// import Card from "./Card";
// import BookDetail from "./BookDetail";
import API from "../utils/API";

class SaveContainer extends Component {
  state = {
    result: []
  };

  // When this component mounts, load books
  componentDidMount() {
    this.displaySavedBooks();
  }

  displaySavedBooks = query => {
    query = query.replace(/ /g, "_");
    API.getSavedBooks().then((res) => {
    this.setState({ result: res.data.items })
      .catch(err => console.log(err));
    // console.log(this.state.result)
  })

};

handleDeleteBooks = id => {
  API.deleteBook(id)
    .then(res => this.displaySavedBooks())
    .catch(err => console.log(err));
}


render() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Container>
        <Row>          
          <Card>
            {this.state.result.length > 0 ? (
              this.state.result.map(Book => (
                // console.log(Book.id)
                <div>

                <Card className="margin"
                  heading={Book.volumeInfo.title}
                >
                  <BookDetail

                    key={Book.id}
                    // id={book.id}                  

                    title={Book.volumeInfo.title}
                    src={Book.volumeInfo.imageLinks !== undefined ? Book.volumeInfo.imageLinks.smallThumbnail : null}
                    authors={Book.volumeInfo.authors}
                    description={Book.volumeInfo.description}
                  
                  />
                </Card>

                </div>
              ))
            ) : (
                <h3>No Results to Display</h3>
              )}
                </Card>              
        </Row>
          </Container>
        </div>
      );
            }
};


export default SaveContainer;