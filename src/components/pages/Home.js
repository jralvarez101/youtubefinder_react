import React, { useState } from "react";
import axios from "axios";
import Search from "../channel/Search";
import ChannelItem from "../channel/ChannelItem";
import AlertWrongChannel from "../layout/AlertWrongChannel";
import ClearButton from "../layout/ClearButton";
import Spinner from "../layout/Spinner";
import useLocalStorage from "../hooks/useLocalStorage";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
`;

function Home() {
  const [searchResultList, setSearchResultList] = useLocalStorage("search", []);
  const [isLoading, setIsLoading] = useState(false);
  const [wrongChannelAlertMessage, setWrongChannelAlertMessage] =
    useState(null);

  // Get Search Results List
  const getSearchResults = async (searchText) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${searchText}&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    if (res.data.items === undefined) {
      console.log("this username does not exist");
      triggerAlert("This channel does not exist, please try again ...");
      setIsLoading(false);
    } else {
      setSearchResultList(res?.data?.items ?? []);
      setIsLoading(false);

      console.log(res.data.items);
    }
  };

  const hasSearchResults = searchResultList.length > 0;

  const triggerAlert = (msg) => {
    setWrongChannelAlertMessage(msg);
    setTimeout(() => {
      setWrongChannelAlertMessage(null);
    }, 5000);
  };

  const handleClick = () => {
    setSearchResultList([]);
  };

  return (
    <Container>
      <Search getSearchResults={getSearchResults} />
      <AlertWrongChannel wrongChannelAlertMessage={wrongChannelAlertMessage} />
      {hasSearchResults && <ClearButton onClick={handleClick} />}
      {isLoading && <Spinner />}
      {hasSearchResults && <ChannelItem searchResultList={searchResultList} />}
    </Container>
  );
}

export default Home;
