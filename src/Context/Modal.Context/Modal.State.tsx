import React, { useState } from "react";
import modalContext from "./Modal.context";

interface ModalStateProps {
  children: React.ReactNode;
}

const ModalState: React.FC<ModalStateProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <modalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </modalContext.Provider>
  );
};

export default ModalState;
