import React from "react";
import { Container, Row, Col } from "../Grid";

const Card = props => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <a className="title" href={props.link}>
            {props.title}
          </a>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <a className="link" href={props.link}>
            {props.link}>
          </a>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col size="sm-1" className="pr-0">
          <img className="bookimg" src={props.img} alt="" />
        </Col>
        <Col size="md-7">
          <h6 className="author">{props.authors}</h6>
          <h6 className="desc">{props.description}</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
