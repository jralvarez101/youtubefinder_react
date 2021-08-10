import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

const AlertDiv = styled.div`
  padding: 0.7rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: #f4f4f4;
  color: #333;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

const Alert = ({ alertMessage }) => {
  return (
    alertMessage !== null && (
      <AlertDiv>
        <FaInfoCircle />
        {alertMessage}
      </AlertDiv>
    )
  );
};

export default Alert;
