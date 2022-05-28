import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from 'axios';

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      console.log(jwt);
    
    axios.get(`${SERVER}/books`)
      .then(res => { console.log(res); this.setState({ books: res.data }); })
      .catch(err => { console.log(err) });
    }
  }

  createBooks = (booksToCreate) => {
    console.log(booksToCreate);
    axios.post(`${SERVER}/books`, booksToCreate)
      .then(res => { console.log(res); this.setState({ books: [...this.state.books, res.data] }); })
      .catch(err => { console.log(err) });
  }

  deleteBooks = (bookIdToDelete) => {
    console.log(bookIdToDelete)
    axios.delete(`${SERVER}/books/${bookIdToDelete}`)
      .then(res => { console.log(res); this.setState({ books: this.state.books.filter(stateBooks => stateBooks._id !== bookIdToDelete) }) })
      .catch(err => { console.log(err) });
  }

  updateBooks = (bookToUpdate) => {
    try {
      console.log("LOOK HERE: " + bookToUpdate._id);
      let updateBook = axios.put(`${SERVER}/books/${bookToUpdate._id}`, bookToUpdate)
      let newBooksArray = this.state.books.map(book => {
        return book._id === bookToUpdate._id
          ? updateBook.data : book
      });
      this.setState({
        books: newBooksArray
      })
    } catch (error) {
      console.log(error.response.data);
    }
  }

  componentDidMount = async () => {
    await this.getBooks()
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated
                  ?
                  <LogoutButton />
                  :
                  <LoginButton />
                }
                {
                  this.props.auth0.isAuthenticated
                  ?
                  <BestBooks
                    onBookCreate={this.createBooks}
                    onBookDelete={this.deleteBooks}
                    updateBook={this.updateBooks}
                    books={this.state.books} />
                  :
                  <p>Welcome! Please login.</p>
                }
              </Route>
              <Route path="/about">
                <About />
              </Route>
              {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            </Switch>
          </main>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
