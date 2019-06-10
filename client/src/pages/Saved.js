import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Card from "../components/SavedCard";

class SaveBook extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  };

  handleDeleteButton = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Card
          savedBooks={this.state.savedBooks}
          handleDeleteButton={this.handleDeleteButton}
        />
      </Container>
    );
  }
}

export default SaveBook;
