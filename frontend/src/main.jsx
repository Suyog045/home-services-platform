import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthModalProvider from "./providers/AuthModalProvider";
import { ModalWrapper } from "./components/AuthPage/Wrapper/ModalWrapper";
import { AuthProvider } from "./providers/AuthContext";
import { BookingProvider } from "./providers/BookingContextProvider";
import { PartnerAuthProvider } from "./providers/PartnerAuthContext";

createRoot(document.getElementById("root")).render(
 
    
      <AuthModalProvider>
        <AuthProvider>
          <PartnerAuthProvider>
          <BookingProvider>
            <ModalWrapper />
            <App />
          </BookingProvider>
          </PartnerAuthProvider>
        </AuthProvider>
      </AuthModalProvider>

);
