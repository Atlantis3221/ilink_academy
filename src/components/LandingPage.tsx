import SVG from "react-inlinesvg";
import styled from "styled-components";

import { useModalContext } from "../context/ModalContext";
import { useNotificationContext } from "../context/NotificationContext";

import BodyVector from "../img/BodyVector.svg";

import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form/Form";
import Message from "./Message";

const Global = styled.div`
  position: relative;
`;

const MainLayout = styled.div<{ isModalOpen: boolean }>`
  position: relative;
  filter: ${(props) => (props.isModalOpen ? "blur(8px)" : "unset")};
`;

const LayoutVector = styled.div`
  position: absolute;
  top: -256px;
  left: 839px;
`;

const AbsoluteWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  background: #ffffff;

  width: 676px;
  z-index: 1;
`;
const NotificationWrapper = styled.div`
  position: fixed;
  right: 40px;
  bottom: 104px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: rgba(0, 0, 0, 0.2);
`;

function LandingPage() {
  const { isModalOpen, handleClose } = useModalContext();
  const { notificationType, handleClose: handleCloseNotification } =
    useNotificationContext();

  return (
    <Global>
      <MainLayout isModalOpen={isModalOpen}>
        <Header />
        <Body />
        <Footer />
        <LayoutVector>
          <SVG src={BodyVector} />
        </LayoutVector>
      </MainLayout>

      {isModalOpen && (
        <AbsoluteWrapper>
          <Form />
        </AbsoluteWrapper>
      )}
      {isModalOpen && <Overlay onClick={handleClose} />}

      {notificationType.length !== 0 && (
        <NotificationWrapper>
          <Message
            type={notificationType}
            handleClose={handleCloseNotification}
          />
        </NotificationWrapper>
      )}
    </Global>
  );
}

export default LandingPage;
