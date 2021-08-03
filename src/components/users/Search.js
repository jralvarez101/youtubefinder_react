import React from "react";
import styled from "styled-components";

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

function Search() {
  return (
    <Container>
      <form>
        <SearchBar type="text" placeholder="Please Enter Channel Name...." />
        <SearchButton type="submit" value="Search" />
      </form>
    </Container>
  );
}

export default Search;
