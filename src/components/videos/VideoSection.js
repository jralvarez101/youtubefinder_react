import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: gray;
  height: 200px;
  /* flex-wrap: wrap; */
  /* justify-content: center; */
`;

cosnt Iframe = styled.iframe`
margin 
`

function VideoSection(props) {
  const { videoListId } = props;
  console.log(videoListId);

  return (
    <Container>
      {videoListId.map((videoId) => (
        <div>
          <iframe
            width="98%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </Container>
  );
}

export default VideoSection;
