import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider, Modal } from "./components/Modal/Modal.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <ModalProvider>
    <React.StrictMode>
      <BrowserRouter basename="/dnd-battle-game">
        <App />
        <Modal />
      </BrowserRouter>
    </React.StrictMode>
  </ModalProvider>,
);
