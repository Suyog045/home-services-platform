import { useContext } from "react";
import { AuthModalContext } from "../Providers/AuthModalProvider";

export const useAuthModal=()=>{
    const context = useContext(AuthModalContext);
    if(context==undefined){
        throw new Error("useModalContext must be used within ModalProvider");
    }

    return context;
}