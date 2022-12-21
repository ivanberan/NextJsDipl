import styled from "styled-components";
const Container = ({ children }) => {
  return <StyedCard>{children}</StyedCard>;
};
export default Container;

const StyedCard = styled.div`
  position: relative;
  width: 30%;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  border-radius: 25px;
  border: 0.4em solid #e8cb5d;
  padding: 50px;
  :first-child{
    margin-top:0px;
  }
`;
