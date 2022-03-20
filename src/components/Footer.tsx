import styled from "styled-components";
import VkIcon from "../img/Vk_icon.png";
import RedditIcon from "../img/Reddit_icon.png";
import TgIcon from "../img/Tg_icon.png";

const FooterContainer = styled.div`
  padding: 22px 80px;
  display: flex;
  justify-content: space-between;
  background: #f5f5f5;
`;

const FooterText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #8a8a8a;
  margin: 0;
`;

const FooterIcons = styled.div`
  display: flex;
  align-items: center;
`;

const FooterIcon = styled.img`
  margin-left: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</FooterText>
      <FooterIcons>
        <FooterIcon src={VkIcon} />
        <FooterIcon src={RedditIcon} />
        <FooterIcon src={TgIcon} />
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
