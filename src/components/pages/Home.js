import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../channel/Search";
import ChannelItem from "../channel/ChannelItem";
import Spinner from "../layout/Spinner";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [searchResultList, setSearchResultList] = useLocalStorage("search", []);
  const [isLoading, setIsLoading] = useState(false);

  // Get Search Results List
  const getSearchResults = async (searchText) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${searchText}&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    setSearchResultList(res?.data?.items ?? []);
    setIsLoading(false);
    console.log(res.data.items);
  };

  const hasSearchResults = searchResultList.length > 0;

  return (
    <Fragment>
      <Search getSearchResults={getSearchResults} />
      {isLoading && <Spinner />}
      {hasSearchResults && <ChannelItem searchResultList={searchResultList} />}
    </Fragment>
  );
}

export default Home;
