import styles from "@/app/_styles/pages/FeedbackPage.module.css";
import { StarIcon } from "@heroicons/react/24/solid";

function Star({ onRate, onHoverIn, onHoverOut, full }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className={styles.star}
    >
      {full ? (
        <StarIcon className={styles.star_full} />
      ) : (
        <StarIcon className={styles.star_empty} />
      )}
    </span>
  );
}

export default Star;

// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// - onMouseEnter(): calls a function when the mouse pointer onto an element
// - onMouseLeave(): calls a function when  the mouse pointer out of an element
// - role: describes the role of an element
// # {destructuring} | gives you direct access to the properties
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
