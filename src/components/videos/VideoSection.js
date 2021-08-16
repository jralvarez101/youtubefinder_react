import React from "react";
import styled from "styled-components";
import spinner from "../layout/spinner.gif";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  background-color: #eeeeee;
  box-sizing: border-box;
  justify-content: center;
  align-self: center;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: center;
  margin: 1rem 0;
`;

const Iframe = styled.iframe`
  width: 100%;
  background: transparent;
`;

const Loader = styled.div`
  background-image: url(${spinner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0.3rem;
  @media (min-width: 1024px) {
    width: 19%;
  }
`;

function VideoSection(props) {
  const { videoListId } = props;
  console.log(videoListId);

  return (
    <Container>
      <VideoContainer>
        <h1>Top 10 Videos for this Channel!</h1>
        <VideoContainer>
          {videoListId.map((videoId) => (
            <Loader>
              <Iframe
                key={videoId}
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></Iframe>
            </Loader>
          ))}
        </VideoContainer>
      </VideoContainer>
    </Container>
  );
}

export default VideoSection;
