"use client";

import { useEffect, useRef } from "react";

export function useCloseWindow(close, capturing = true) {
  // Reference
  const ref = useRef();

  // Close window outside / escape window
  useEffect(
    function () {
      function handleClose(event) {
        // reference exist / doesn't contain a click inside the box / doesn't exist key event => close the window
        if (ref.current && !ref.current.contains(event.target) && !event.key) {
          close();
        }
        // escape pressed => close the window
        if (event.key === "Escape") {
          close();
        }
      }
      // add click
      document.addEventListener("click", handleClose, capturing);
      // add key
      document.addEventListener("keydown", handleClose, capturing);
      // remove click / key
      return () =>
        document.removeEventListener(
          "keydown" || "click",
          handleClose,
          capturing
        );
    },
    // dependency value
    [close, capturing]
  );
  // Return value
  return ref;
}

// Effect
// - useEffect(): performs side effects in your components
// -- dependency[] | [property or state] - runs any time dependency value changes
// DOM Events
// # event propagation: a way of defining the element order when an event occurs
// - bubbling: first - the inner event / second - the outer event
// - capturing: first - the outer event / second - the inner event
// Props: arguments passed into React components
// - event.target: returns the element when the event occured
// - event.key: returns a key was pressed
// Methods
// # ref
// - useRef(): reference a value that is not needed for rendering
// -- ref.current: a value of the ref object's property
// # events
// - addEventListener(): add a click/press event to the document
// - removeEventListener(): remove a click/press event from the document
// Operators
// - && | AND(choice: the first false or the last true)
// - || | OR(choice: the first true)
