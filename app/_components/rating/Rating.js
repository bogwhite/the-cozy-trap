"use client";

import { useState } from "react";
import Star from "./Star";
import styles from "@/app/_styles/pages/FeedbackPage.module.css";

function Rating() {
  // States
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  // Maximum number of rating
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

// State
// - useState(): allows you to add state to a functional component
// -- [first value] | the current state
// -- [second value] | the function that updates the state
// --- setState(value) | the current value
// Props: arguments passed into React components
// - key{}: each child in a list should have a unique "key" prop
// # form
// - name: specifies the name of a form element | reference form data after the submission
// - value{}: specifies the value of the form element
// - type = "hidden" | an invisible input field | let to include data that can't be seen or modified by user when a form is submitted
// Methods
// - Array.from(): returns a new array from any object(with a length property)
// -- {length}: specifies the length of the array
// -- (_, i): optional function that determines the values of the array elements
// --- (_): for the element value - undefined / (i) - for the element index
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// HTML
// - <></>: let you group a list of children elements without adding extra nodes to the DOM
