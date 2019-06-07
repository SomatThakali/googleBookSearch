import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import "./style.css";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = query => {
    if (query) {
      API.getSearchedBooks(query)
        .then(res => {
          this.setState({ results: res.data.items });
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
    this.setState({
      query: ""
    });
    this.getBooks(this.state.query);
  };
  render() {
    return (
      <div>
        <Jumbotron
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          q={this.state.query}
        />

        {this.state.results.map(book => (
          <Card
            key={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            img={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.infoLink}
          />
        ))}
      </div>
    );
  }
}
export default Search;
