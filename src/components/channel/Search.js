import React, { useState } from "react";
import styled from "styled-components";
import Alert from "../layout/Alert";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
`;

const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const SearchButton = styled.input`
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  color: #fff;
  background: #333333;
  margin-top: 1.5rem;
`;

// Currently setting the search bar
function Search({ getSearchResults }) {
  const [searchText, setSearchText] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  // With this function we are passing a prop up one component by calling a function that is on the Home Page.
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      setAlert("Please enter something");
    } else {
      getSearchResults(searchText);
      setSearchText("");
    }
  };

  // Set Alert
  const setAlert = (msg) => {
    setAlertMessage(msg);
    setTimeout(() => {
      setAlertMessage(null);
    }, 5000);
  };

  return (
    <Container>
      <Alert alertMessage={alertMessage} />
      <form>
        <SearchBar
          type="text"
          name="text"
          placeholder="Please Enter Channel Name...."
          value={searchText}
          onChange={onChange}
        />
        <SearchButton type="submit" value="Search" onClick={onSubmit} />
      </form>
    </Container>
  );
}

export default Search;
