import { auth } from "@/app/_library/auth";
import MenuButton from "@/app/_components/button/MenuButton";
import Logo from "./Logo";
import LogIn from "./LogIn";
import Profile from "./Profile";
import styles from "@/app/_styles/layout/Header.module.css";

async function Navigation() {
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
