import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
`;

function About() {
  return (
    <Container>
      <h1>About this App</h1>
      <p>App to search YouTube Channels</p>
      <p>Version: 1.0.0</p>
    </Container>
  );
}

export default About;
