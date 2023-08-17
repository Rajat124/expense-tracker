import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const RederList = (props) => {
  return (
    <Container className="justify-content-md-center">
      <Row
        className="justify-content-md-center"
        style={{
          border: "2px solid black",
          fontFamily: "cursive",
          fontWeight: "bolder",
          margin: "5px",
          padding: "8px 0",
          borderRadius: "8px",
        }}
      >
        <Col md={2}>Amount: {props.amount}</Col>
        <Col md={2}>Description: {props.desc}</Col>
        <Col md={2}>Category: {props.category}</Col>
      </Row>
    </Container>
  );
};

export default RederList;
