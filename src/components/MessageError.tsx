import styled from "styled-components";
import SVG from "react-inlinesvg";
import FailBubbles from "../img/icons/RedBubbles.svg";
import { FactorA } from "./FactorA";
import FailIcon from "../img/icons/Fail.svg";
import Cross from "../img/icons/MessageCross.svg";

const MessageBody = styled.div`
  max-width: 438px;
  position: relative;
  padding: 16px 64px 23px 130px;
  color: #ffffff;
  background: rgba(246, 75, 60, 1);
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
  top: 30px;
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

const MessageError = () => {
  return (
    <MessageBody>
      <FactorA>
        <MessageCaption>Что-то не так...</MessageCaption>
      </FactorA>
      <MessageComment>
        Не получилось отправить отзыв. Попробуйте еще раз!
      </MessageComment>
      <SuccessBubble>
        <SVG src={FailBubbles} />
      </SuccessBubble>
      <SuccessIconWrapper>
        <SVG src={FailIcon} />
      </SuccessIconWrapper>
      <MessageCross>
        <SVG src={Cross} />
      </MessageCross>
    </MessageBody>
  );
};

export default MessageError;
