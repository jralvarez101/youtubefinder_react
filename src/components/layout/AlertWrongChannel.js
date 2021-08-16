import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

const AlertDiv = styled.div`
  padding: 0.7rem;
  margin: auto;
  margin-top: 2rem;
  opacity: 0.9;
  background: #f4f4f4;
  color: #910011;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  width: 92%;
`;

const StyledFaInfoCircle = styled(FaInfoCircle)`
  color: #910011;
`;

function AlertWrongChannel(props) {
  const { wrongChannelAlertMessage } = props;
  return (
    wrongChannelAlertMessage !== null && (
      <AlertDiv>
        <StyledFaInfoCircle />
        {wrongChannelAlertMessage}
      </AlertDiv>
    )
  );
}

export default AlertWrongChannel;
