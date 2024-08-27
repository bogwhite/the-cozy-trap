"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/_styles/layout/Header.module.css";

function MenuButton() {
  // Menu state
  const [showMenu, setShowMenu] = useState(false);
  // URL reader | pathname
  const pathname = usePathname();

  // Style
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

// State
// - useState(): allows you to add state to a functional component
// -- [first value] | the current state
// -- [second value] | the function that updates the state
// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// # url | pathname
// - usePathname(): used to read the pathname in the current URL
// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// - || | OR(choice: the first true)
// HTML
// - <></>: let you group a list of children elements without adding extra nodes to the DOM
