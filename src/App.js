import React from 'react';
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

  getBooks = () => {
    axios.get(`${SERVER}/books`)
      .then(res => { console.log(res); this.setState({ books: res.data }); })
      .catch(err => { console.log(err) });
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
                <BestBooks 
                onBookCreate={this.createBooks}
                onBookDelete={this.deleteBooks} 
                books={this.state.books} />
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

export default App;
