import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background: #f4f4f4;
  color: #333;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.3rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  display: block;
  width: 100%;
  font-size: 1.2rem;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
`;

function ClearButton({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Button type="button">Clear</Button>
    </Container>
  );
}

export default ClearButton;
