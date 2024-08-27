import Link from "next/link";
import styles from "@/app/_styles/pages/NotFoundPage.module.css";

function NotFound() {
  return (
    <div className={styles.not_found}>
      <h4 className={styles.not_found_heading}>
        This cabin could not be found
      </h4>
      <Link href="/cabins" className={styles.not_found_link}>
        Go home
      </Link>
    </div>
  );
}

export default NotFound;

// App router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
