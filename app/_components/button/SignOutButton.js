import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "@/app/_library/actions";
import styles from "@/app/_styles/layout/SideBar.module.css";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className={styles.signOut_btn}>
        <ArrowRightOnRectangleIcon />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;

// Props
// # form
// - action: specifies where to send the form-data when a form is submitted
