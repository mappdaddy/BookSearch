import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import BookDetail from "./BookDetail";
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
      API.getSavedBooks ()
        this.setState({ result: res.data.items })
        .catch(err => console.log(err));
        // console.log(this.state.result)
      };
     
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
              <Col size="lg-12" mb='12'>
                <Card
                  heading={((this.state.result.length > 0) ? this.state.result[0].volumeInfo.title : "Search for a Book to Begin")}
                >
  
                  {this.state.result.length > 0 ? (
                    this.state.result.map(DeleteBook => (
                      // console.log(DeleteBook.id)
                      // <div className="margin">
                      
                      <Card className= "margin"
                      heading={DeleteBook.volumeInfo.title}
                      >
                      <BookDetail 
                      
                        key={DeleteBook.id}
                        // id={book.id}                  
  
                        title={DeleteBook.volumeInfo.title}                   
                        src={DeleteBook.volumeInfo.imageLinks !== undefined ? DeleteBook.volumeInfo.imageLinks.smallThumbnail : null}
                        authors={DeleteBook.volumeInfo.authors}
                        description={DeleteBook.volumeInfo.description}
                        // imageLinks
                        // smallThumbnail
                      />
                      </Card>
                     
                      // </div>
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
  
  
  export default SaveContainer;