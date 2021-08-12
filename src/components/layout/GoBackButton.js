import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #333333;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  font-size: 0.8rem;
  padding: 0.5rem 4rem;
  margin-right: 0.2rem;
  margin: 1rem 0;
`;

function GoBackButton() {
  let history = useHistory();

  const handleClick = () => history.push("/");

  return (
    <Container>
      <Button type="button" onClick={handleClick}>
        Go Back
      </Button>
    </Container>
  );
}

export default GoBackButton;
