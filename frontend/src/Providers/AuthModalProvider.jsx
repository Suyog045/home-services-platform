import React, { createContext, useContext, useState } from 'react'
import RootLayout from '../Layout/RootLayout';

const AuthModalContext = createContext(undefined);
export const AuthModalProvider = ({children}) => {
    const [isModalOpen,setIsModalopen] = useState(false);
    const [modalType,setModalType] = useState(null);
    const openModal = ()=>setIsModalopen(true);
    const closeModal = ()=>setIsModalopen(false);
  return (
    <AuthModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalType,setModalType }}>
        {children}
    </AuthModalContext.Provider>
  )
}

export const useAuthModal=()=>{
    const context = useContext(AuthModalContext);
    if(context==undefined){
        throw new Error("useModalContext must be used within ModalProvider");
    }

    return context;
}

export default AuthModalProvider