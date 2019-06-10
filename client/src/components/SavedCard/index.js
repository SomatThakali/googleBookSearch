import React from "react";
import { Container, Row, Col } from "../Grid";

const Card = props => {
  return props.savedBooks.length === 0 ? (
    <div />
  ) : (
    <div>
      {props.savedBooks.map(book => {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <a className="title" href={book.link}>
                  {book.title}
                </a>
              </Col>
            </Row>
            <Row>
              <Col size="md-12">
                <a className="link" href={book.link}>
                  {book.link}>
                </a>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col size="sm-1" className="pr-0">
                <img className="bookimg" src={book.image} alt="" />
              </Col>
              <Col size="md-7">
                <h6 className="author">{book.authors}</h6>
                <h6 className="desc">{book.description}</h6>
              </Col>
              <Col size="md-1">
                <button
                  className=" btn button"
                  id={book._id}
                  onClick={() => props.handleDeleteButton(book._id)}
                >
                  Delete
                </button>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Card;
