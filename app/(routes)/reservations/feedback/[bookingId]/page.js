import { getFeedback } from "@/app/_library/actions";
import Rating from "@/app/_components/rating/Rating";
import SubmitButton from "@/app/_components/button/SubmitButton";
import styles from "@/app/_styles/pages/FeedbackPage.module.css";

async function feedbackPage({ params }) {
  // BookingId | data from the dynamic params
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

// App router
// # url | dynamic params
// - params: returns an object of the dynamic params from the current URL that were matched the <Route path>
// Props: arguments passed into React components
// # form
// - action: specifies where to send the form-data after the submission
// - name: specifies the name of a form element | reference form data after the submission
// - value{}: specifies the value of the form element
// - type = "hidden" | an invisible input field | let to include data that can't be seen or modified by user when a form is submitted
