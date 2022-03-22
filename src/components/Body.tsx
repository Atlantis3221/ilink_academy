import styled from "styled-components";
import Interview from "./Interview/Interview";
import Comments from "./Comments/Comments";

const BodyConatner = styled.div`
  padding: 100px 80px;
  background: #585cc6;
`;

const Body = () => {
  return (
    <BodyConatner>
      <Interview />
      <Comments/>
    </BodyConatner>
  );
};

export default Body;
