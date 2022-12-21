import Head from "next/head";
import styled from "styled-components";
import PokeCard from "./components/PokeCard";
import Sizes from "./constants/Sizes";

export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      `https://api.pokemontcg.io/v2/cards?pageSize=90`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": "3bc13933-0aa4-4bec-89bd-a9ca5ae35bf2",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      throw "error";
    }
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    console.log(e);
  }
};

export default function Home({ data }) {
  return (
    <StyledDiv>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Pokemon TCG API App" />
      </Head>
      <Stars>
        <StyledMainScreen>
          {data &&
            Object.entries(data.data).map(([key, value]) => {
              return <PokeCard key={key} data={value} />;
            })}
        </StyledMainScreen>
      </Stars>
    </StyledDiv>
  );
}

const StyledMainScreen = styled.div`
  margin: auto;
  width: 70%;
  max-width: 70%;
  word-wrap: break-word;
`;
const StyledDiv = styled.div`
  position: sticky;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(
    90deg,
    #0f022b 10%,
    #1b0426 90%
  ); /* Chrome 10+, Saf5.1+ */
  background: -moz-linear-gradient(
    90deg,
    #0f022b 10%,
    #1b0426 90%
  ); /* FF3.6+ */
  background: -ms-linear-gradient(90deg, #0f022b 10%, #1b0426 90%); /* IE10 */
  background: -o-linear-gradient(
    90deg,
    #0f022b 10%,
    #1b0426 90%
  ); /* Opera 11.10+ */
  background: linear-gradient(90deg, #0f022b 10%, #1b0426 90%); /* W3C */
`;
const Stars = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: url(http://www.script-tutorials.com/demos/360/images/stars.png)
    repeat top center;
  z-index: 1;
`;
