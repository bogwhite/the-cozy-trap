import styles from "@/app/_styles/components/Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.spinner_box}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
