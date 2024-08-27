"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function Logo() {
  // URL reader | pathname
  const pathname = usePathname();

  // Style
  const logo =
    pathname === "/" || pathname === "/about"
      ? "/logo/logo_light.png"
      : "/logo/logo_dark.png";

  return (
    <Link href="/">
      <img src={logo} alt="Cozy Trap logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;

// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// App Router
// # url | pathname
// - usePathname(): used to read the pathname in the current URL
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// - || | OR(choice: the first true)
