"use client"; // Client-side

import { useState } from "react";
import styles from "@/app/_styles/pages/CabinPage.module.css";

function Expander({ children }) {
  // Expanding state
  const [isExpanded, setIsExpanded] = useState(false);
  // Text functionality
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 100).join(" ") + "...";

  return (
    <span>
      {displayText}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.expander_btn}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default Expander;

// State
// - useState(): allows you to add state to a functional component
// -- [first value] | the current state
// -- [second value] | the function that updates the state
// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// - children: child components of the element passed between tags
// # {destructuring} | gives you direct access to the properties
// Methods
// - split(): splits elements and store data into an array
// - slice(): returns selected elements of an array
// - join(): join elements and extract data out of array
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
