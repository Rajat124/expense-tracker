import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";

const RederList = (props) => {
  const deleteItem = () => {
    props.onDelete(props);
  };

  const updateItem = () => {
    props.onUpdate(props);
  };
  return (
    <Container className="justify-content-md-center">
      <ListGroup
        className="justify-content-md-center"
        style={{
          fontFamily: "cursive",
          fontWeight: "bolder",
          margin: "6px",
          borderRadius: "8px",
        }}
      >
        <ListGroup.Item>
          <Row>
            <Col>AMOUNT: Rs.{props.amount}/- </Col>
            <Col xs={3}>DESCRIPTION: {props.desc} </Col>
            <Col>CATEGORY: {props.category} </Col>
            <Col xs={4}>
              <Button onClick={deleteItem}>Delete</Button>
              <Button onClick={updateItem} variant="danger">
                Edit
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default RederList;
