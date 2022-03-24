import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form/Form";
import { useModalContext } from "../context/ModalContext";

const Global = styled.div`
  position: relative;
`;

const MainLayout = styled.div<{ isModalOpen: boolean }>`
  position: relative;
  filter: ${(props) => (props.isModalOpen ? "blur(8px)" : "unset")};
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

function LandingPage() {
  const { isModalOpen, handleClose } = useModalContext();

  return (
    <Global>
      <MainLayout isModalOpen={isModalOpen}>
        <Header />
        <Body />
        <Footer />
      </MainLayout>

      {isModalOpen && (
        <AbsoluteWrapper>
          <Form />
        </AbsoluteWrapper>
      )}
      {isModalOpen && <Overlay onClick={handleClose} />}
    </Global>
  );
}

export default LandingPage;