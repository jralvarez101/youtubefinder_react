import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { FaVideo } from "react-icons/fa";
import ToggleNav from "./ToggleNav";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4a525e;
  padding: 5px 20px;
  color: #fcf8ec;
  position: relative;
  ${({ menuIconClicked }) =>
    menuIconClicked &&
    css`
      height: 150px;
      align-items: flex-start;
    `}
`;

const H1 = styled.h1`
  display: flex;
  margin-left: 3px;
  flex-wrap: wrap;
  gap: 15px;
`;

const Li = styled.li`
  list-style-type: none;
  margin-left: 15px;
  margin-top: ${({ menuIconClicked }) => (menuIconClicked ? `15px` : `0`)};
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    position: absolute;
    visibility: ${({ menuIconClicked }) =>
      menuIconClicked ? `visible` : `hidden`};
  }

  ${({ menuIconClicked }) =>
    menuIconClicked &&
    css`
      display: flex;
      flex-direction: column;
      top: 50px;
      visibility: visible;
      left: 80px;
    `};
`;

const ToggleWrapper = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
  ${({ menuIconClicked }) =>
    menuIconClicked &&
    css`
      margin-top: 25px;
    `}
`;

function Navbar() {
  const [menuIconClicked, setMenuIconClicked] = useState(false);

  const toggleNavigation = (e) => {
    menuIconClicked ? setMenuIconClicked(false) : setMenuIconClicked(true);
  };

  return (
    <Nav menuIconClicked={menuIconClicked}>
      <H1>
        <FaVideo />
        <div>YouTube Finder</div>
      </H1>
      <Ul menuIconClicked={menuIconClicked}>
        <Li menuIconClicked={menuIconClicked}>
          {/* <Link to="/">Home</Link> */}
          Home
        </Li>
        <Li menuIconClicked={menuIconClicked}>
          {/* <Link to="/about"> About</Link> */}
          About
        </Li>
      </Ul>
      <ToggleWrapper
        onClick={toggleNavigation}
        menuIconClicked={menuIconClicked}
      >
        <ToggleNav toggleOn={menuIconClicked} />
      </ToggleWrapper>
    </Nav>
  );
}

export default Navbar;
