import styled from "styled-components";
import Vk from "../img/icons/Vk.svg";
import Reddit from "../img/icons/Reddit.svg";
import Tg from "../img/icons/Tg.svg";
import SVG from "react-inlinesvg";
import { SvgWrapper } from "./SvgWrapper";

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

const FooterIcon = styled(SvgWrapper)`
  & + & {
    margin-left: 20px;
  }
  
  @media all and (max-width: 1024px) {
    & + & {
      margin-left: 10px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</FooterText>
      <FooterIcons>
        <FooterIcon>
          <SVG src={Vk} uniquifyIDs={true} />
        </FooterIcon>
        <FooterIcon>
          <SVG src={Reddit} uniquifyIDs={true} />
        </FooterIcon>
        <FooterIcon>
          <SVG src={Tg} uniquifyIDs={true} />
        </FooterIcon>
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
