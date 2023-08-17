import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const ExpenseInput = (props) => {
  const amountInputRef = useRef();
  const descInputRef = useRef();
  const cateInputRef = useRef();

  const sumbitHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;
    const desc = descInputRef.current.value;
    const category = cateInputRef.current.value;

    let data = {
      amount: amount,
      desc: desc,
      category: category,
      id: Math.random().toString(),
    };

    props.InputData(data);

    console.log(amount, desc, category);
  };

  return (
    <div>
      <Form onSubmit={sumbitHandler} className="form-control">
        <h2>Expense</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Amount:</Form.Label>
          <Form.Control type="number" ref={amountInputRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description:</Form.Label>
          <Form.Control type="text" ref={descInputRef} />
        </Form.Group>
        <Form.Label>Choose Category:</Form.Label>
        <Form.Select aria-label="Default select example" ref={cateInputRef}>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salary">Salary</option>
        </Form.Select>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ExpenseInput;
