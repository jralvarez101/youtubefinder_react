import React, { Fragment } from "react";
import styled from "styled-components";

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

function RightColumn(props) {
  const { channelDetailsResult } = props;
  return (
    <Fragment key={channelDetailsResult?.id}>
      <ul>
        <Li>Title: {channelDetailsResult?.title}</Li>
        <Li>ID: {channelDetailsResult?.id}</Li>
        <Li>
          Subscribers: {channelDetailsResult?.statistics?.subscriberCount}
        </Li>
        <Li>Videos: {channelDetailsResult?.statistics?.videoCount}</Li>
        <Li>
          Total Video Views: {channelDetailsResult?.statistics?.viewCount}
        </Li>
      </ul>
      <Description>{channelDetailsResult?.snippet?.description}</Description>
    </Fragment>
  );
}

export default RightColumn;
