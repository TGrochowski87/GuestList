import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const GuestList = ({ inviteeAnswer, title, guests }) => {
  return (
    <StyledList>
      <Title>
        <h1>{title}</h1>
        {inviteeAnswer === "yes" ? (
          <h4>To tak luźno licząc: {guests.length}</h4>
        ) : (
          ""
        )}
      </Title>
      <Guests>
        {guests.length
          ? guests.map((g) => <h3 key={uuidv4()}>{g.name}</h3>)
          : ""}
      </Guests>
    </StyledList>
  );
};

const StyledList = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.div`
  height: 5rem;
`;

const Guests = styled.div`
  position: relative;
  left: 20%;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  word-wrap: break-word;
`;

export default GuestList;
