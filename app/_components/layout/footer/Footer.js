"use client";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import styles from "@/app/_styles/layout/Footer.module.css";

function Footer() {
  // URL reader | pathname
  const pathname = usePathname();

  // Path exceptions
  const exception = pathname.startsWith("/cabins") || pathname === "/about";

  return exception ? (
    <footer className={styles.footer}>
      <h3 className={styles.heading}>Cozy Trap</h3>

      <div className={styles.contacts_box}>
        <span className={styles.contacts}>
          <PhoneIcon />
          +380 (93) 937 99 92
        </span>
        <span className={styles.contacts}>
          <EnvelopeIcon />
          cozy.trap@gmail.com
        </span>
      </div>

      <ul className={styles.social_media}>
        <li>
          <a href="https://www.instagram.com/">
            <img src="/svg/instagram.svg" alt="icon-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <img src="/svg/facebook.svg" alt="icon-facebook" />
          </a>
        </li>
        <li>
          <a href="https://x.com/">
            <img src="/svg/x.svg" alt="icon-x" />
          </a>
        </li>
      </ul>
    </footer>
  ) : null;
}

export default Footer;

// App Router
// # url | pathname
// - usePathname(): used to read the pathname in the current URL
// Methods
// - startsWith(): returns true if a string starts with a specified string
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// - || | OR(choice: the first true)
