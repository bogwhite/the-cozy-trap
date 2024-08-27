"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function Profile({ session }) {
  const pathname = usePathname();

  const profile_theme =
    pathname === "/" || pathname === "/about"
      ? `${styles.profile_link} + ${styles.profile_link_light}`
      : `${styles.profile_link} + ${styles.profile_link_dark}`;

  return (
    <Link href="/reservations" className={profile_theme}>
      <img
        src={session.user.image}
        alt={session.user.name}
        referrerPolicy="no-referrer"
      />
      <span>{session.user.name}</span>
    </Link>
  );
}

export default Profile;
