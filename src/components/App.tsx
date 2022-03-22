import React from "react";
import ModalProvider from "../context/ModalContext";
import LandingPage from "./LandingPage";

function App() {
  return (
    <ModalProvider>
      <LandingPage />
    </ModalProvider>
  );
}

export default App;
