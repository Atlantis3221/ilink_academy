import styled from "styled-components";
import SVG from "react-inlinesvg";
import Logo from "../img/HeaderLogo.svg";
import Avatar from "../img/icons/Avatar.svg";
import { Btn } from "./Button"

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px 80px;
`;
const HeaderName = styled.div`
  display: flex;
`;
const NameImg = styled.div`
  margin-right: 20px;
  border: 1px solid black;
`;

const NameText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 18px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderName>
        <NameImg>
          <SVG src={Avatar} />
        </NameImg>
        <NameText>Степа Тугарев</NameText>
      </HeaderName>
      <SVG src={Logo} />
      <Btn>Панель управления</Btn>
    </HeaderContainer>
  );
};

export default Header;
