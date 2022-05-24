import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
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
    books: {},
  }
}

getBooks = async (booksToRetrieve) => {
  (await axios.get(`${SERVER}/books`, booksToRetrieve))
    .then(res => {console.log(res); this.setState({books: res.data});})
    .catch(err => {res.status(500).send(err);});
}

createBooks = async (booksToCreate) => {
  (await axios.post(`${SERVER}/books`, booksToCreate))
    .then(res => {console.log(res); this.setState({books: res.data});})
    .catch(err => {res.status(500).send(err);});
}

deleteBooks = async (bookIdToDelete) =>{
  (await axios.delete(`${SERVER}/books`, bookIdToDelete))
    .then(res => { console.log(res); this.setState({books: this.state.books.filter(stateBooks => stateBooks._id !== bookIdToDelete)})})
    .catch(err => {res.status(500).send(err);});
}

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              { this.state.books && <BestBooks onBookDelete={this.handleDeleteBooks} books={this.state.books}/> }
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
