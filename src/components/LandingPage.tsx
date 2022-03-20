import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = styled.div``;

function LandingPage() {
  return (
    <MainLayout>
      <Header />
      <Footer />
    </MainLayout>
  );
}

export default LandingPage;
