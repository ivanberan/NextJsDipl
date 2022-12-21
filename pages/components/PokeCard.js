import styled from "styled-components";
import Container from "./Container";
import { useState } from "react";
import Link from "next/link";
const PokeCard = (props) => {
  const {
    name,
    images,
    cardmarket,
    artist,
    nationalPokedexNumbers,
    id,
    flavorText,
  } = props.data;
  return (
    <>
      <Container>
        <StyledContent>
          <StyledRow>
            <StyledTitle>
              No. {nationalPokedexNumbers[0]} {name}
            </StyledTitle>
            <a href={cardmarket.url}>
              <StyledButton>Buy now!</StyledButton>
            </a>
          </StyledRow>

          <Line />
          <ImageWrapper>
            <Link href={"/" + id}>
              <StyedImg alt={"Loading"} src={images.large} />
            </Link>
          </ImageWrapper>
          <Line />
          {flavorText && <StyledDesc>{flavorText}</StyledDesc>}
          <Line />
          <StyledDesc>Artist:</StyledDesc>
          <StyledDesc>{artist}</StyledDesc>
        </StyledContent>
      </Container>
    </>
  );
};
export default PokeCard;
const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-bottom: 1em;
`;
const StyledButton = styled.button`
  background-image: linear-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 0, 1)
  );
  padding: 1em;
  border-radius: 3em;
  border: 0.2em solid black;
  position: absolute;
  top: -1em;
`;
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;
const StyledContent = styled.div`
  width: 100%;
  margin: auto;
`;
const StyledTitle = styled.h1`
  font-size: 1.5em;
  margin: auto;
`;
const StyledDesc = styled.div`
  font-size: 1.2em;
  padding-bottom: 0.2em;
`;
const ImageWrapper = styled.div`
  font-size: 0.3em;
  position: relative;
  height: 100%;
  margin: auto;
  width: 100%;
`;

const StyedImg = styled.img`
  position: relative;
  width: 100%;
  transition: transform 0.7s ease-in-out;
`;
