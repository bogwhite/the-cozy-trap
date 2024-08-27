"use client";

import { useState } from "react";
import Star from "./Star";
import styles from "@/app/_styles/pages/FeedbackPage.module.css";

function Rating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const maxRating = 5;

  return (
    <>
      <input type="hidden" name="userRating" value={rating} />
      <div className={styles.rating_box}>
        {Array.from({ length: maxRating }, (_, index) => (
          <Star
            key={index}
            full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
            onRate={() => setRating(index + 1)}
            onHoverIn={() => setTempRating(index + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </div>
    </>
  );
}

export default Rating;
