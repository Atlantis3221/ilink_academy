import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Form from "./Form";

const MainLayout = styled.div`
  position: relative;
`;

function LandingPage() {
  return (
    <MainLayout>
      <Header />
      <Body />
      <Form/>
      <Footer />
    </MainLayout>
  );
}

export default LandingPage;
