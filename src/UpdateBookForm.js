import React from 'react';
import { Button, Form } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

    handleBookSubmit = (e) => {
        e.preventDefault();
        // console.log("HERE" + this.props.updateBook)
        let bookToUpdate = {
            title: this.state.title || this.props.book.title,
            description: this.state.description || this.props.description,
            status: this.state.status || this.props.status,
            _id: this.props.book._id,
            __v: this.props.book.__v
        };
        console.log(bookToUpdate);
        this.props.updateBook(bookToUpdate);
    }

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

    render() {
        return (
            <Form onSubmit={this.handleBookSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder={this.props.book.title} name="title" onChange={this.handleTitleChange} />
                    <Form.Text className="text-muted">
                        We'll always sell your information.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder={this.props.book.description} name="description" onChange={this.handleDescriptionChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Did you do your homework?" ref="status" onChange={this.handleStatusChange} />
                </Form.Group>
                <Button
                    variant="secondary"
                    type="submit"
                >
                    Update Book
                </Button>
            </Form>
        )
    }
}

export default UpdateBookForm;