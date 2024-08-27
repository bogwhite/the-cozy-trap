import Navigation from "./Navigation";
import styles from "@/app/_styles/layout/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default Header;
