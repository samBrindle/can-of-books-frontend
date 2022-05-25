import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
require('dotenv').config();

export default class BestBooks extends React.Component {

  render() {
    return (
      <>
        <ListGroup>
          {this.props.books.length && this.props.books.map(book => (
            <BestBook book={book} onBookDelete={this.props.onBookDelete} />
          ))}
        </ListGroup>
        <NewBook onBookCreate={this.props.onBookCreate} />
      </>
    )
  }
}

class BestBook extends React.Component {
  render() {
    return (
      <ListGroup.Item key={this.props.book._id}>{this.props.book.title}
        <button onClick={this.props.onBookDelete(this.props.book._id)}>Delete</button>
      </ListGroup.Item>
    )
  }
}

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      description: undefined,
      status: undefined
    };
  }
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
    console.log(this.state);
  }
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
    console.log(this.state);
  } 
  handleStatusChange = (e) => {
    this.setState({
      status: e.target.checked
    });
    console.log(this.state);
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
          <Form.Control type="text" placeholder="Enter Description" name="description" onChange={this.handleDescriptionChange}/>
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
