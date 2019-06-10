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
        let books = res.data.items;
        books = books.map(book => {
          book = {
            key: book.id,
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          };
          return book;
        });

        this.setState({ books: books, error: "" });
      })
      .catch(err => this.setState({ error: err.items }));
  };

  handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(
      book => book.id === event.target.id
    );
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
