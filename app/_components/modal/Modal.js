"use client";

import { createContext, useContext, useState, createElement } from "react";
import { HiXMark } from "react-icons/hi2";
import { useCloseWindow } from "@/app/_hooks/useCloseWindow";
import styles from "@/app/_styles/components/Modal.module.css";

const ModalContext = createContext();

function Modal({ children }) {
  const [modalType, setModalType] = useState("");
  const close = () => setModalType("");
  const open = setModalType;

  return (
    <ModalContext.Provider value={{ modalType, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, type }) {
  const { open } = useContext(ModalContext);
  return createElement(children.type, {
    ...children.props,
    onClick: () => open(type),
  });
}

function Window({ children, window }) {
  const { modalType, close } = useContext(ModalContext);
  const ref = useCloseWindow(close);

  function modalStyle() {
    if (modalType === "reservation")
      return `${styles.modal} + ${styles.modal_reservation}`;
    else if (modalType === "delete")
      return `${styles.modal} + ${styles.modal_delete}`;
    else if (modalType === "login")
      return `${styles.modal} + ${styles.modal_login}`;
  }

  if (window !== modalType) return null;

  return (
    <div className={styles.overlay}>
      <div className={modalStyle()} ref={ref}>
        <button onClick={close} className={styles.close_btn}>
          <HiXMark />
        </button>
        {children}
      </div>
    </div>
  );
}

function useClose() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { Modal, Open, Window, useClose };
