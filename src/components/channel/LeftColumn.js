import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

const Img = styled.img`
  border-radius: 50%;
  border: #ccc 1px dotted;
  width: 40%;
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
  padding: 0.3rem 1rem;
  width: 40%;
  margin-top: 20px;
`;

function LeftColumn(props) {
  const { channelDetailsResult } = props;

  return (
    <Fragment>
      <Img
        src={channelDetailsResult?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <Button>Go to Channel</Button>
    </Fragment>
  );
}

export default LeftColumn;
