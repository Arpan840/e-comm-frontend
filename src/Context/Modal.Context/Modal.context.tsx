import { createContext,Dispatch,SetStateAction } from "react";
interface ModalContextProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
  }
const modalContext = createContext<ModalContextProps>({ showModal: false, setShowModal: ()=>{} });

export default modalContext;
