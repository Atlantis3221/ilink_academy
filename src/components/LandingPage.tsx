import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

const MainLayout = styled.div``;

function LandingPage() {
  return (
    <MainLayout>
      <Header />
      <Body />
      <Footer />
    </MainLayout>
  );
}

export default LandingPage;
