import SignInButton from "@/app/_components/button/SignInButton";
import styles from "@/app/_styles/pages/LoginPage.module.css";

// Metadata
export const metadata = {
  title: "Login",
};

function LoginPage() {
  return (
    <div className={styles.login}>
      <h4 className={styles.login_heading}>Sign in to your account</h4>

      <SignInButton />
    </div>
  );
}

export default LoginPage;
