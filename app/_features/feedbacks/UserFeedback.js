import { PencilSquareIcon, StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import styles from "@/app/_styles/pages/ReservationsPage.module.css";

function UserFeedback({ userRating, bookingId }) {
  return (
    <>
      {userRating ? (
        <span className={styles.user_rating}>
          {userRating}.00
          <StarIcon />
        </span>
      ) : (
        <Link
          href={`/reservations/feedback/${bookingId}`}
          className={styles.feedback_link}
        >
          <PencilSquareIcon />
          <span>Feedback</span>
        </Link>
      )}
    </>
  );
}

export default UserFeedback;

// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// HTML
// - <></>: let you group a list of children elements without adding extra nodes to the DOM
