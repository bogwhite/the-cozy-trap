"use client";

import { createContext, useContext, useState, createElement } from "react";
import { HiXMark } from "react-icons/hi2";
import { useCloseWindow } from "@/app/_hooks/useCloseWindow";
import styles from "@/app/_styles/components/Modal.module.css";

// Creating Context
const ModalContext = createContext();

function Modal({ children }) {
  // Modal type
  const [modalType, setModalType] = useState("");
  // Open/Close
  const close = () => setModalType("");
  const open = setModalType;

  return (
    // Providing Context
    <ModalContext.Provider value={{ modalType, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, type }) {
  // Consuming Context
  const { open } = useContext(ModalContext);

  // Pass prop | open window
  return createElement(children.type, {
    ...children.props,
    onClick: () => open(type),
  });
}

function Window({ children, window }) {
  // Consuming Context
  const { modalType, close } = useContext(ModalContext);
  // Close window
  const ref = useCloseWindow(close);

  // Style
  function modalStyle() {
    if (modalType === "reservation")
      return `${styles.modal} + ${styles.modal_reservation}`;
    else if (modalType === "delete")
      return `${styles.modal} + ${styles.modal_delete}`;
    else if (modalType === "login")
      return `${styles.modal} + ${styles.modal_login}`;
  }

  // Don't open the modal window until the modal button is clicked
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
  // Consuming Context
  const context = useContext(ModalContext);
  // Undefined => Error
  if (context === undefined)
    throw new Error("Context was used outside provider");
  // Return context
  return context;
}

export { Modal, Open, Window, useClose };

// Context: system to pass data without passing props down the tree
// # creating
// - createContext(): creates a context that components can provide or read
// # provider: provides all child components access to value
// - value: available data
// # consuming
// - useContext(): allows you to use context inside a component
// State
// - useState(): allows you to add state to a functional component
// -- [first value] | The current state
// -- [second value] | The function that updates the state
// Methods
// - createElement(): creates a React element with the given type(tag or react component), props and children
// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// - {children}: child components of the element passed between tags
// Operators
// ...spread
// - {...object} | unpack properties
// Assignment
// {destructuring} | gives you direct access to the properties
