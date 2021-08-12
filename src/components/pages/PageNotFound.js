import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
`;

function PageNotFound() {
  return (
    <Container>
      <h1>How did you end up here?</h1>
      <p>You probably entered the wrong channel name!</p>
      <p>Or um.... idk...</p>
    </Container>
  );
}

export default PageNotFound;
