import React, { Fragment } from "react";
import Search from "../users/Search";
import UserItem from "../users/UserItem";

function Home({ getSearchResults, searchResultList }) {
  return (
    <Fragment>
      <Search handleSearch={getSearchResults} />
      <UserItem searchResultList={searchResultList} />
    </Fragment>
  );
}

export default Home;
