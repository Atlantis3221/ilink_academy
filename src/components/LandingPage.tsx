import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";
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
`;

function LandingPage() {
  const { isModalOpen } = useModalContext();

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
    </Global>
  );
}

export default LandingPage;
