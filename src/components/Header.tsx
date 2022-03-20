import styled from "styled-components";
import Logo from "../img/HeaderLogo.png";

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
  width: 52px;
  height: 52px;
  margin-right: 20px;
  background: #333333;
`;
const NameText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #333333;
`;

const HeaderLogo = styled.img`
  width: 86px;
  height: 52px;
`;

const HeaderBtn = styled.button`
  background: #585cc6;
  border-radius: 2px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;

  padding: 17px 28px;

  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderName>
        <NameImg />
        <NameText>Степа Тугарев</NameText>
      </HeaderName>
      <HeaderLogo src={Logo} />
      <HeaderBtn>Панель управления</HeaderBtn>
    </HeaderContainer>
  );
};

export default Header;
