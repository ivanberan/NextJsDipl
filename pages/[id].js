import styled from "styled-components";
import Container from "./components/Container";
import CardDetails from "./components/Shared/CardDetails";


  export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`, {
      method: "GET",
      headers: {
        "X-API-KEY": "3bc13933-0aa4-4bec-89bd-a9ca5ae35bf2",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return {
      props: {
        card: data,
      },
    };
  };
const Details = (card) => {
    console.log(card)
    const {artist, attacks, hp, level,rarity, nationalPokedexNumbers,  images, resistances, supertype, types, weaknesses, tcgplayer} = card.card.data
  return (
    <StyledModal>
          <Container>
            <StyedImg alt={"Loading"}  src={images.large} />
      </Container>
      <Container>
        <StyledContent>
        <StyledContent>
            <CardDetails data={{value: artist, label: 'Artist'}}/>
            <CardDetails data={{value: supertype, label: 'Type of card:'}}/>
            <CardDetails data={{value: nationalPokedexNumbers[0], label: 'No:'}}/>
            <CardDetails data={{value: rarity, label: 'Rarity'}}/>
            <CardDetails data={{value: level, label: 'level'}}/>
            <CardDetails data={{value: hp, label: 'hp'}}/>
            <CardDetails data={{value: types[0], label: 'Type:'}}/>
            <CardDetails data={{value: attacks[0] ? attacks[0].name : "none", label: 'Attack 1:'}}/>
            <CardDetails data={{value: attacks[1] ? attacks[1].name : "none", label: 'Attack 2:'}}/>
            <CardDetails data={{value: resistances ? resistances[0].type : "none", label: 'Resistances:'}}/>
            <CardDetails data={{value: weaknesses ? weaknesses[0].type : "none", label: 'Weaknesses'}}/>
            {/* <CardDetails data={{value: `${tcgplayer.prices.holofoil.low}$ - ${tcgplayer.prices.holofoil.high}$`, label: 'Average Price Range'}}/> */}
        </StyledContent>    
        </StyledContent>
      </Container>
    </StyledModal>
  );
};

export default Details;
const StyedImg = styled.img`
    position: relative;
  width: 100%;
  transition: transform 0.7s ease-in-out;
`;
const StyledModal = styled.div`
position: relative;
display: flex;
flex-direction: row;
  position: relative;
  z-index: 6;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
`;
const StyledContent = styled.div`
  width: 100%;
  margin: auto;
`;
