import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";

const Li = styled.li`
  list-style-type: none;
  padding: 0.4rem;
  border: #ccc 1px solid;
  width: 100%;
  margin: 0;
  @media (max-width: 425px) {
    width: 95%;
  }
`;

const Description = styled.p`
  margin-left: 2.3rem;
`;

function RightColumn() {
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
          <ul>
            <Li>Title: {data.title}</Li>
            <Li>ID: {data.id}</Li>
            <Li>Subscribers: {data.statistics.subscriberCount}</Li>
            <Li>Videos: {data.statistics.videoCount}</Li>
            <Li>Total Video Views: {data.statistics.viewCount}</Li>
          </ul>
          <Description>{data.snippet.description}</Description>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default RightColumn;
