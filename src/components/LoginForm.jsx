import React, {useRef, useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StyledForm = styled.form`
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const LoginForm = ({ onLogin }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [username] = useState("admin");
  const [password] = useState("123456");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Username:</Label>
          <Input type="text" defaultValue={username} ref={usernameRef} required />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" defaultValue={password} ref={passwordRef} required />
        </FormGroup>
        <Button type="submit">Login</Button>
      </StyledForm>
    </FormContainer>
  );
};

export default LoginForm;
