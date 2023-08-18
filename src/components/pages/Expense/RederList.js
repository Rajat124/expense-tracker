import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

const RederList = (props) => {
  return (
    <Container className="justify-content-md-center">
      <ListGroup
        className="justify-content-md-center"
        style={{
          fontFamily: "cursive",
          fontWeight: "bolder",
          margin: "6px",
          //   padding: "8px 0",
          borderRadius: "8px",
        }}
      >
        <ListGroup.Item as="li">
          <Row>
            <Col>AMOUNT: Rs.{props.amount}/- </Col>
            <Col>DESCRIPTION: {props.desc} </Col>
            <Col>CATEGORY: {props.category} </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default RederList;
