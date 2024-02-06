import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { firebaseLoginURL } from "../utils/firebaseConstant";

import LoginContext from "../utils/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const navigate= useNavigate();

  const loginCtx = useContext(LoginContext);

  const onClickLoginHandler = async (e) => {
    e.preventDefault();

    try {
       const formItems = {
      email: email.current.value,
      password: password.current.value,
      returnSecureToken: true,
    };

    const setCredentails = await fetch(firebaseLoginURL, {
      method: "POST",
      body: JSON.stringify(formItems),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await setCredentails.json();

    if (setCredentails.ok) {
      console.log("login successful");
      localStorage.setItem("token", data.idToken);
      loginCtx.loginToken(data.idToken);
      navigate("/store");
    }else{
      
      throw new Error(data.error.message)
    }
    } catch (error) {
       alert(error)
    }
   
  };

  return (
    <Form className="m-5 p-2">
      <h1 className="metal-font d-flex justify-content-center">Login Form</h1>
      <Form.Group className="mb-3 m-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={email} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 m-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={password}
          type="password"
          placeholder="Enter password"
        />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" onClick={onClickLoginHandler}>
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Login;