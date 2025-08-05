import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthModalProvider from "./Providers/AuthModalProvider";
import { ModalWrapper } from "./Components/AuthPage/Wrapper/ModalWrapper";
import { BookingProvider } from "./Providers/BookingContextProvider";

createRoot(document.getElementById("root")).render(
  <AuthModalProvider>
    <BookingProvider>
    <ModalWrapper />
    <App />
    </BookingProvider>
  </AuthModalProvider>
);
