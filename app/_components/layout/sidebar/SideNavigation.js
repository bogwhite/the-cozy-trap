"use client"; // Client-side

import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SignOutButton from "@/app/_components/button/SignOutButton";
import styles from "@/app/_styles/layout/SideBar.module.css";

function SideNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.list_item}>
          <Link
            href="/reservations"
            className={`${styles.link} ${styles.link_active}`}
          >
            <CalendarDaysIcon className={styles.link_img} />
            <span>Reservations</span>
          </Link>
        </li>

        <li className={styles.list_item}>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;

// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
