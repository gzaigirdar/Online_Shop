import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  return (
    <ModalContext.Provider value={{ openLogin, closeLogin }}>
      {children}

      {showLogin && (
        <Modal show={showLogin} onClose={closeLogin}>
          <Loginform closeIt={closeLogin} />
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);