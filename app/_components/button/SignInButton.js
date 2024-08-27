import { signInAction } from "@/app/_library/actions";
import styles from "@/app/_styles/pages/LoginPage.module.css";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className={styles.signIn_btn}>
        <img src="/svg/google.svg" alt="Google logo" />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
