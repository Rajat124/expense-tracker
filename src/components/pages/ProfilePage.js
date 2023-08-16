import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const ProfilePage = () => {
  const fullnameInput = useRef();
  const profileLinkInput = useRef();

  const submitHandler = () => {
    const fullname = fullnameInput.current.value;
    const profileLink = profileLinkInput.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDYfusG2ykTFrcF5AZHX45XIWzd3ffeaEg",
      {
        method: "POST",
        body: {
          displayName: fullname,
          photoUrl: profileLink,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMess = "failed";
            if (data && data.error && data.error.message) {
              errorMess = data.error.message;
            }
            throw new Error("Something Wrong");
          });
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <h2>Profile</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" ref={fullnameInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Profile Photo URL</Form.Label>
        <Form.Control type="url" ref={profileLinkInput} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default ProfilePage;
