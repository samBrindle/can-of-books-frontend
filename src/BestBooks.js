import React from 'react';
import UpdateBookForm from './UpdateBookForm';
import { Form, Button, ListGroup } from 'react-bootstrap';
require('dotenv').config();

export default class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      description: undefined,
      status: undefined
    };
  }

  render() {
    return (
      <>
        {this.props.books.length &&
          <ListGroup>
            {this.props.books.map(book => (
              <BestBook key={book._id} book={book} onBookDelete={this.props.onBookDelete} updateBook={this.props.updateBook} />
            ))}
          </ListGroup>
        }
        <NewBook onBookCreate={this.props.onBookCreate} />
      </>
    )
  }
}

class BestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false
    }
  }

  render() {
    return (
      <>
        <ListGroup.Item>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
          <Button
            onClick={() => this.setState({ showUpdateForm: true })}
          >
            Update Book
          </Button>
          <Button variant='danger' onClick={() => this.props.onBookDelete(this.props.book._id)}>Delete</Button>
        </ListGroup.Item>
        {
          this.state.showUpdateForm &&
          <UpdateBookForm
            book={this.props.book}
            updateBook={this.props.updateBook}
          />
        }
      </>
    )
  }
}

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      description: undefined,
      status: undefined,
      books: []
    };
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  }
  handleStatusChange = (e) => {
    this.setState({
      status: e.target.checked
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onBookCreate(this.state);
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" name="title" onChange={this.handleTitleChange} />
          <Form.Text className="text-muted">
            We'll always sell your information.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Description" name="description" onChange={this.handleDescriptionChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Did you do your homework?" ref="status" onChange={this.handleStatusChange} />
        </Form.Group>
        <Button
          variant="secondary"
          type="submit"
        >
          Add New
        </Button>
      </Form>
    )
  }
}
