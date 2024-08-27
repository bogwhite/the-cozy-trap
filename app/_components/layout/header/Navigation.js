import { auth } from "@/app/_library/auth";
import MenuButton from "@/app/_components/button/MenuButton";
import Logo from "./Logo";
import LogIn from "./LogIn";
import Profile from "./Profile";
import styles from "@/app/_styles/layout/Header.module.css";

async function Navigation() {
  // User data | after user authorised
  const session = await auth();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <MenuButton />
        </li>
        <li className={styles.logo_item}>
          <Logo />
        </li>
        <li className={styles.profile_item}>
          {session?.user?.image ? <Profile session={session} /> : <LogIn />}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

// Props: arguments passed into React components
// # auth
// - referrerPolicy: no-referrer | sent requests do not include any referrer information | important to display google profile images
// Operators
// - ?. | check existing element / returns undefined if an object is undefined or null (instead of an error)
// - ?: | condition ? expression 1(true) : expression 2(false)
