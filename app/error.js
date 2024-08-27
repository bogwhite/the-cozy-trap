"use client";

import styles from "@/app/_styles/pages/ErrorPage.module.css";

function Error({ error, reset }) {
  return (
    <section className={styles.error}>
      <h4 className={styles.error_heading}>Something went wrong!</h4>
      <p className={styles.error_paragraph}>{error.message}</p>

      <button onClick={reset} className={styles.error_btn}>
        Try again
      </button>
    </section>
  );
}

export default Error;
