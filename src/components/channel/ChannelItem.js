import React, { Fragment } from "react";
import { withRouter, generatePath } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../../config/constants";

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  padding: 1rem;
  border: #ccc 1px dotted;
  margin: 0.7rem 0;
  text-align: center;
  width: 35%;
  @media (max-width: 425px) {
    min-width: 90%;
  }
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

function UserItem(props) {
  const { searchResultList, history } = props;

  const navigateToChannelDetail = (channelID) => {
    const channelDetailsRoute = generatePath(ROUTES.CHANNEL_DETAILS, {
      channelID,
    });

    history.push(channelDetailsRoute);
  };
  return (
    <Container>
      <Card>
        {searchResultList.map((data) => (
          <Fragment key={data.id}>
            <Img src={data.snippet.thumbnails.default.url} alt="thumbnail" />
            <h3> {data.snippet.title}</h3>
            <p>{data.snippet.description}</p>
            <Button onClick={() => navigateToChannelDetail(data.id)}>
              See More
            </Button>
          </Fragment>
        ))}
      </Card>
    </Container>
  );
}

export default withRouter(UserItem);
