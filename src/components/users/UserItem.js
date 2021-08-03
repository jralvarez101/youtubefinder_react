import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  text-align: center;
  max-width: 25%;
`;

const Img = styled.img`
  border-radius: 50%;
  border: #ccc 1px dotted;
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
  margin-right: 0.2rem;
  margin: 1rem 0;
`;

function UserItem() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchYoutubeChannel = async () => {
      const response = await axios.get(
        "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=GoogleDevelopers&key=AIzaSyDkr4Qsz7NnrltVvvJO3O1mw2Jnr7__jdU"
      );
      console.log(response.data);
      setVideoData(response?.data?.items ?? []);
    };
    fetchYoutubeChannel();
  }, []);

  return (
    <Card>
      {videoData.map((data) => (
        <Fragment key={data.id}>
          <Img src={data.snippet.thumbnails.default.url} alt="thumbnail" />
          <h3> {data.snippet.title}</h3>
          <Button>See More</Button>
        </Fragment>
      ))}
    </Card>
  );
}

export default UserItem;
