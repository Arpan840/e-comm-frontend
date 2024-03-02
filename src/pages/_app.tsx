import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import ModalState from "@/Context/Modal.Context/Modal.State";
import { Provider } from "react-redux";
import { store } from "@/Redux/Store/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <Provider store={store}>
      <ModalState>
        <Component {...pageProps} />      
      </ModalState>
    </Provider>
    <ToastContainer />
    </>
  );
}
