import styled from "styled-components";
import SVG from "react-inlinesvg";

import { FactorA } from "./FactorA";
import Cross from "../img/icons/MessageCross.svg";
import SuccessCheck from "../img/icons/Success.svg";
import Fail from "../img/icons/Fail.svg";
import GreenBubbles from "../img/icons/GreenBubbles.svg";
import RedBubbles from "../img/icons/RedBubbles.svg";

type NotificationType = "error" | "success";
const MessageBody = styled.div<{ type: NotificationType }>`
  position: relative;
  overflow: hidden;
  max-width: 438px;
  padding: 16px 64px 23px 130px;
  color: ${(props) => (props.type === "error" ? "white" : "#333333")};
  background: ${(props) =>
    props.type === "error" ? "#F64B3C" : "rgba(181, 255, 162, 1)"};
  border-radius: 32px;
`;
const MessageCross = styled.div<{ type: NotificationType }>`
  position: absolute;
  right: 24px;
  top: 24px;
  path {
    fill: ${(props) => (props.type === "error" ? "white" : "black")};
  }
  cursor: pointer;
`;
const SuccessBubble = styled.div`
  position: absolute;
  left: 0;
  top: 42px;
`;

const SuccessCheckWrapper = styled.div`
  position: absolute;
  top: -39px;
  left: 20px;
  z-index: 999;
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
const MessageWrapper = styled.div`
  position: relative;
`;

const Message: React.FC<any> = ({ handleClose, type }) => {
  const message =
    type === "error"
      ? "Не получилось отправить отзыв. Попробуйте еще раз!"
      : "Спасибо за отзыв о нашей компании:)";
  const title = type === "error" ? "Что-то не так..." : "Успешно!";

  return (
    <MessageWrapper>
      <SuccessCheckWrapper>
        <SVG src={type === "error" ? Fail : SuccessCheck} />
      </SuccessCheckWrapper>

      <MessageBody type={type}>
        <FactorA>
          <MessageCaption>{title}</MessageCaption>
        </FactorA>
        <MessageComment>{message}</MessageComment>
        <SuccessBubble>
          <SVG src={type === "error" ? RedBubbles : GreenBubbles} />
        </SuccessBubble>

        <MessageCross type={type} onClick={handleClose}>
          <SVG src={Cross} />
        </MessageCross>
      </MessageBody>
    </MessageWrapper>
  );
};

export default Message;
