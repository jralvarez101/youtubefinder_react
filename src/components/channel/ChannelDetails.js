import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";
import VideoSection from "../videos/VideoSection";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Spinner from "../layout/Spinner";
import GoBackButton from "../layout/GoBackButton";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Column1 = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: space-evenly;
  box-sizing: border-box;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const Column2 = styled.div`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  justify-content: space-evenly;
  box-sizing: border-box;
  @media (max-width: 425px) {
    width: 100%;
  }
`;

function User(props) {
  const channelID = props.match.params.channelID;
  const [channelDetailsResult, setChannelDetailsResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [videoListId, setVideoListId] = useState([]);

  // Get Search Results List
  useEffect(() => {
    const getChannelDetailsResults = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelID}&key=${process.env.REACT_APP_YOUTUBE_API}`
      );
      const [firstItem] = res?.data?.items ?? [];
      setChannelDetailsResult(firstItem ?? {});
      console.log(channelDetailsResult);
      setIsLoading(false);
    };
    getChannelDetailsResults();
  }, [channelID]);

  useEffect(() => {
    const getVideoListResults = async () => {
      setIsLoading(true);
      const videoResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=5&key=${process.env.REACT_APP_YOUTUBE_API}`
      );
      const listOfVideos = videoResponse.data.items;
      console.log(listOfVideos);
      const videoId = [];
      listOfVideos.forEach((item) => {
        videoId.push(item.id.videoId);
      });
      console.log(videoId);
      setVideoListId(videoId);
      setIsLoading(false);
    };

    getVideoListResults();
  }, [channelID]);

  const hasSearchResults = channelDetailsResult.length > 0;

  console.log("channelDetailsResult: ", channelDetailsResult);
  return (
    <Fragment>
      <GoBackButton />
      <Container>
        <Card>
          <Column1>
            {isLoading && <Spinner />}
            {!hasSearchResults && (
              <LeftColumn channelDetailsResult={channelDetailsResult} />
            )}
          </Column1>
          <Column2>
            {isLoading && <Spinner />}
            {!hasSearchResults && (
              <RightColumn channelDetailsResult={channelDetailsResult} />
            )}
          </Column2>
        </Card>
      </Container>
      <VideoSection videoListId={videoListId} />
    </Fragment>
  );
}

export default withRouter(User);
