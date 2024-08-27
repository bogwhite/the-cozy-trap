import { getFeedback } from "@/app/_library/actions";
import Rating from "@/app/_components/rating/Rating";
import SubmitButton from "@/app/_components/button/SubmitButton";
import styles from "@/app/_styles/pages/FeedbackPage.module.css";

async function feedbackPage({ params }) {
  const { bookingId } = params;

  return (
    <div className={styles.feedback}>
      <h4 className={styles.feedback_heading}>Reservation #{bookingId}</h4>

      <form action={getFeedback} className={styles.feedback_form}>
        <input type="hidden" name="bookingId" value={bookingId} />

        <div>
          <label className={styles.form_label}>Leave your feedback</label>
          <Rating />
        </div>

        <div>
          <label htmlFor="review" className={styles.form_label}>
            Leave a review about your stay
          </label>
          <textarea
            id="review"
            name="review"
            placeholder="Your experience"
            className={styles.form_textarea}
          />
        </div>

        <div className={styles.btn_box}>
          <SubmitButton label="Sending..." type="feedback">
            Send feedback
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default feedbackPage;
