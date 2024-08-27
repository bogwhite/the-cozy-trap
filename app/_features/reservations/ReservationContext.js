"use client"; // Client-side

import { createContext, useContext, useState } from "react";

// Creating Context
const ReservationContext = createContext();

function ReservationProvider({ children }) {
  // Range
  const [range, setRange] = useState({ from: null, to: null });
  // Reset range
  const resetRange = () => setRange({ from: null, to: null });

  return (
    // Providing Context
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  // Consuming Context | all properties
  const context = useContext(ReservationContext);
  // Undefined => Error
  if (context === undefined)
    throw new Error("Context was used outside provider");
  // Return context
  return context;
}

export { ReservationProvider, useReservation };

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
// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// - {children}: child components of the element passed between tags
// # {destructuring} | gives you direct access to the properties
