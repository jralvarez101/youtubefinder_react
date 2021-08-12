import React, { Fragment } from "react";
import styled from "styled-components";
import spinner from "./spinner.gif";

const SpinnerImage = styled.img`
  display: block;
  margin: auto;
  width: 200px;
`;

function Spinner() {
  return (
    <Fragment>
      <SpinnerImage src={spinner} alt="loading" />
    </Fragment>
  );
}

export default Spinner;
