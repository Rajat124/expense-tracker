import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const ListExpense = (props) => {
  return (
    <Container className="justify-content-md-center">
      {props.item.map((item) => (
        <Row
          className="justify-content-md-center"
          key={item.id}
          style={{
            border: "2px solid black",
            // width: "50rem",
            fontFamily: "cursive",
            fontWeight: "bolder",
          }}
        >
          <Col md={2}>Amount: {item.amount}</Col>
          <Col md={2}>Description: {item.desc}</Col>
          <Col md={2}>Category: {item.category}</Col>
        </Row>
      ))}
    </Container>
  );
};

export default ListExpense;
