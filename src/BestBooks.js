import React from 'react';
import axios from 'axios';
import { Carousel, Container, ListGroup } from 'react-bootstrap';
require('dotenv').config();



export default class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */
    // let book = this.state.books;

    let bookArr = this.state.books.map((story, idx) => {
      return (
        <Carousel.Item key={idx} >
          <img
            src="https://via.placeholder.com/150"
            alt={story.title}
          />
          <Carousel.Caption>
            <h3>{story.title}</h3>
            <p>Description: {story.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    })

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length} ? (

        <Container>
          <Carousel>
            {bookArr}
          </Carousel>
        </Container>

        <p>Book Carousel coming soon</p>
        ) : (
        <h3>No Books Found :(</h3>
        )
      </>
    )
  }
}

class BestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book = this.props.book
    };
  }
  render () {
    return (
      <ListGroup.Item>{book.title}
        <Button 
          variant="danger"
          type="button"
        >Delete</Button>
      </ListGroup.Item>
    )
  }
}
