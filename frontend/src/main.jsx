import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthModalProvider from "./Providers/AuthModalProvider";
import { ModalWrapper } from "./Components/AuthPage/Wrapper/ModalWrapper";

createRoot(document.getElementById("root")).render(
  <AuthModalProvider>
    <ModalWrapper />
    <App />
  </AuthModalProvider>
);
