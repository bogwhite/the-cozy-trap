"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function MenuButton() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const menu =
    pathname === "/" || pathname === "/about"
      ? "/svg/menu_light.svg"
      : "/svg/menu_dark.svg";
  const linkTheme =
    pathname === "/" || pathname === "/about"
      ? `${styles.menu_link} + ${styles.menu_link_light}`
      : `${styles.menu_link} + ${styles.menu_link_dark}`;

  return (
    <>
      {!showMenu ? (
        <button onClick={() => setShowMenu(true)} className={styles.menu_btn}>
          <img src={menu} alt="Menu" className={styles.menu_img} />
        </button>
      ) : (
        <div className={styles.menu_link_box}>
          <Link href="/cabins" className={linkTheme}>
            Cabins
          </Link>
          <Link href="/about" className={linkTheme}>
            About
          </Link>
        </div>
      )}
    </>
  );
}

export default MenuButton;
