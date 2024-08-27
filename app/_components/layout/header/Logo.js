"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function Logo() {
  const pathname = usePathname();

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
