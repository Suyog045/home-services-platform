import React, { createContext, useState } from 'react'

export const AuthModalContext = createContext(undefined);
const AuthModalProvider = ({children}) => {
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

export default AuthModalProvider