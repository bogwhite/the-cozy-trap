"use client";

import { useEffect, useRef } from "react";

export function useCloseWindow(close, capturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClose(event) {
        if (ref.current && !ref.current.contains(event.target) && !event.key) {
          close();
        }
        if (event.key === "Escape") {
          close();
        }
      }
      document.addEventListener("click", handleClose, capturing);
      document.addEventListener("keydown", handleClose, capturing);
      return () =>
        document.removeEventListener(
          "keydown" || "click",
          handleClose,
          capturing
        );
    },
    [close, capturing]
  );
  return ref;
}
