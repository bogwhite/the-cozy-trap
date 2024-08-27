"use client";

import { useState } from "react";
import styles from "@/app/_styles/pages/CabinPage.module.css";

function Expander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

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
