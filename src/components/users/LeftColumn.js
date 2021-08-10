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
`;

function LeftColumn() {
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    const fetchYoutubeChannel = async () => {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=drjoedispenza&key=${process.env.REACT_APP_YOUTUBE_API}`
      );
      setChannelData(response?.data?.items ?? []);
    };
    fetchYoutubeChannel();
  }, []);

  return (
    <Fragment>
      {channelData.map((data) => (
        <Fragment key={data.id}>
          <Img src={data.snippet.thumbnails.medium.url} alt="thumbnail" />
          <Button>Go to Channel</Button>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default LeftColumn;
