"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function LogIn() {
  // URL reader | pathname
  const pathname = usePathname();

  // Style
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

// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// # url | pathname
// - usePathname(): used to read the pathname in the current URL
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// - || | OR(choice: the first true)
