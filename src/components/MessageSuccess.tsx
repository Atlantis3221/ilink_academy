import styled from "styled-components";
import SVG from "react-inlinesvg";
import SuccessBubbles from "../img/icons/GreenBubbles.svg";
import { FactorA } from "./FactorA";
import SuccessIcon from "../img/icons/Success.svg";
import Cross from "../img/icons/MessageCross.svg";

const MessageBody = styled.div`
  max-width: 438px;
  position: relative;
  padding: 16px 64px 23px 130px;
  color: #333333;
  background: rgba(181, 255, 162, 1);
  border-radius: 32px;
`;
const MessageCross = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
`;
const SuccessBubble = styled.div`
  position: absolute;
  left: 0;
  top: 42px;
`;
const SuccessIconWrapper = styled.div`
  position: absolute;
  top: -39px;
  left: 20px;
`;
const MessageCaption = styled.div`
  font-weight: 500;
  font-size: 32px;
  line-height: 34px;
`;
const MessageComment = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const MessageSuccess = () => {
  return (
    <MessageBody>
      <FactorA>
        <MessageCaption>Успешно!</MessageCaption>
      </FactorA>
      <MessageComment>Спасибо за отзыв о нашей компании:)</MessageComment>
      <SuccessBubble>
        <SVG src={SuccessBubbles} />
      </SuccessBubble>
      <SuccessIconWrapper>
        <SVG src={SuccessIcon} />
      </SuccessIconWrapper>
      <MessageCross>
        <SVG src={Cross} />
      </MessageCross>
    </MessageBody>
  );
};

export default MessageSuccess;