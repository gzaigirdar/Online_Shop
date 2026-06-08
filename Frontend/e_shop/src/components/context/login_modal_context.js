'use client'
import { createContext, useContext, useState } from "react";
import Modal from "@/components/modals/Modal";
import Loginform from "@/components/Login/Loginform";

const LoginModalContext = createContext();

export function LoginModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const openLoginModal = () => setShowModal(true);
  const closeLoginModal = () => setShowModal(false);

  return (
    <LoginModalContext.Provider value={{ openLoginModal, closeLoginModal }}>
      {children}
      {showModal && (
        <Modal show={showModal} onClose={closeLoginModal}>
          <Loginform closeIt={closeLoginModal} />
        </Modal>
      )}
    </LoginModalContext.Provider>
  );
}

export function useLoginModal() {
  const context = useContext(LoginModalContext);
  if (!context) {
    return { openLoginModal: () => {}, closeLoginModal: () => {} };
  }
  return context;
}