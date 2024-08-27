import Link from "next/link";
import styles from "@/app/_styles/pages/ThankYouPage.module.css";

function ThankYouPage() {
  return (
    <div className={styles.thank_you}>
      <h4 className={styles.thank_you_heading}>
        Thank you for your reservation!
      </h4>
      <Link href="/reservations" className={styles.thank_you_link}>
        Manage your reservations
      </Link>
    </div>
  );
}

export default ThankYouPage;

// App router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
