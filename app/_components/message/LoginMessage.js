import Link from "next/link";
import styles from "@/app/_styles/pages/ReservationPage.module.css";

function LoginMessage() {
  return (
    <div className={styles.message}>
      <p>
        Please{" "}
        <Link href="/login" className={styles.message_link}>
          login
        </Link>{" "}
        to book the cabin
      </p>
    </div>
  );
}

export default LoginMessage;
