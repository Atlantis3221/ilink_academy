import styled from "styled-components";
import SVG from "react-inlinesvg";
import Logo from "../img/HeaderLogo.svg";
import Avatar from "../img/icons/Avatar.svg";

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

export const HeaderBtn = styled.button`
  background: #585cc6;
  border-radius: 2px;
  border: none;

  font-weight: 600;
  line-height: 18px;
  color: #ffffff;

  padding: 17px 28px;

  cursor: pointer;
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
      <HeaderBtn>Панель управления</HeaderBtn>
    </HeaderContainer>
  );
};

export default Header;
