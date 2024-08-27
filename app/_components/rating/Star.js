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
