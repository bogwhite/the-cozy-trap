"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function LogIn() {
  const pathname = usePathname();

  const link_theme =
    pathname === "/" || pathname === "/about"
      ? `${styles.nav_link} + ${styles.nav_link_first}`
      : `${styles.nav_link} + ${styles.nav_link_second}`;

  return (
    <Link href="/reservations" className={link_theme}>
      Log In
    </Link>
  );
}

export default LogIn;
