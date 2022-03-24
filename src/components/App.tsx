import React from "react";
import ModalProvider from "../context/ModalContext";
import NotificationProvider from "../context/NotificationContext";
import LandingPage from "./LandingPage";

function App() {
  return (
    <ModalProvider>
      <NotificationProvider>
        <LandingPage />
      </NotificationProvider>
    </ModalProvider>
  );
}

export default App;
