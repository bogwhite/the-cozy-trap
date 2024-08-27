import SideNavigation from "@/app/_components/layout/sidebar/SideNavigation";
import styles from "@/app/_styles/layout/ReservationsLayout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <SideNavigation />
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default Layout;
