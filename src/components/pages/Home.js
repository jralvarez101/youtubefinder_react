import React, { Fragment, useState } from "react";
import axios from "axios";
import Search from "../users/Search";
import UserItem from "../users/UserItem";

function Home() {
  const [searchResultList, setSearchResultList] = useState([]);

  // Get Search Results List
  const getSearchResults = async (searchText) => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${searchText}&key=${process.env.REACT_APP_YOUTUBE_API}`
    );
    setSearchResultList(res?.data?.items ?? []);
  };

  const hasSearchResults = searchResultList.length > 0;

  return (
    <Fragment>
      <Search getSearchResults={getSearchResults} />
      {hasSearchResults && <UserItem searchResultList={searchResultList} />}
    </Fragment>
  );
}

export default Home;
