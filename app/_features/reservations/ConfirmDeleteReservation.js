import { useClose } from "../../_components/modal/Modal";
import styles from "@/app/_styles/modals/ConfirmDeleteReservation.module.css";

function ConfirmDeleteReservation({ onConfirm }) {
  // Close property
  const { close } = useClose();

  return (
    <div className={styles.confirmation}>
      <h4 className={styles.confirmation_heading}>Delete booking</h4>
      <p className={styles.confirmation_paragraph}>
        Are you sure you want to delete this booking?
      </p>

      <div className={styles.btn_box}>
        <button
          onClick={close}
          className={`${styles.confirmation_btn} ${styles.cancel}`}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className={`${styles.confirmation_btn} ${styles.delete}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeleteReservation;

// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// Assignment
// {destructuring} | gives you direct access to the properties
