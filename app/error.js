"use client"; // Client-side

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

// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// # {destructuring} | gives you direct access to the properties
// ErrorBoundary: a component that catches an error(within a component tree) and prevents it from crashing the application
// - error: display an error
// - reset: reset the error and re-try the render
