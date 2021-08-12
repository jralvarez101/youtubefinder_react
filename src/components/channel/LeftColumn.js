import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import Spinner from "../layout/Spinner";

const Img = styled.img`
  border-radius: 50%;
  border: #ccc 1px dotted;
  width: 40%;
`;

const Button = styled.a`
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
  text-align: center;
  text-decoration: none;
`;

function LeftColumn(props) {
  console.log("prop:", props);
  const { channelDetailsResult } = props;

  return (
    <Fragment>
      <Img
        src={channelDetailsResult?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <Button
        href={`https://youtube.com/${channelDetailsResult?.snippet?.customUrl}`}
        target="_blank"
      >
        Go to Channel
      </Button>
    </Fragment>
  );
}

export default LeftColumn;
