import styled from "styled-components";

const CardDetails = (props) => {
  const { label, value } = props.data;
  return (
    <StyledDiv>
      <LabelDiv>{label}</LabelDiv>
      <ValueDiv>{value}</ValueDiv>
    </StyledDiv>
  );
};
export default CardDetails;
const StyledDiv = styled.div`
  width: 100%;
  margin: auto;
  height: 150px;
  border-radius: 5px;
  border: 2px solid black;
  margin-bottom: 20px;
`;
const LabelDiv = styled.div`
  border-bottom: 2px;
  font-size: 1.4em;
  font-weight: 600;
  padding: 10px 0 0 10px;
  background-color: #2da1b5;
`;
const ValueDiv = styled.div`
  border: 2px;
  font-size: 3em;
  padding: 10px 0 0 10px;
`;
