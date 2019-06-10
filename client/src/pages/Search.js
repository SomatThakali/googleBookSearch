import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

import "./style.css";

class Search extends Component {
  state = {
    query: "",
    books: [],
    message: "",
    error: " "
  };

  componentDidMount() {
    this.getSearchedBooks();
  }

  getSearchedBooks = query => {
    if (query) {
      API.getSearchedBooks(query)
        .then(res => {
          this.setState({ books: res.data.items });
        })
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSearchedBooks(this.state.query)
      .then(res => {
        let results = res.data.items;
        results = results.map(result => {
          result = {
            key: result.id,
            id: result.id,
            title: result.volumeInfo.title,
            author: result.volumeInfo.authors,
            description: result.volumeInfo.description,
            image: result.volumeInfo.imageLinks.thumbnail,
            link: result.volumeInfo.infoLink
          };
          return result;
        });

        this.setState({ books: results, error: "" });
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(
      book => book.id === event.target.id
    );
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.query}
        />

        <Card
          books={this.state.books}
          handleSavedButton={this.handleSavedButton}
        />
      </div>
    );
  }
}
export default Search;
