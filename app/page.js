import Image from "next/image";
import Link from "next/link";
import home from "@/public/home/home.png";
import styles from "@/app/_styles/pages/HomePage.module.css";

function AppPage() {
  return (
    <div className={styles.home}>
      <Image
        src={home}
        alt="Mountains and forests with two cabins"
        fill
        quality={100}
      />

      <div className={styles.home_box}>
        <h1 className={styles.home_heading}>
          Your peak
          <br />
          in the sky
        </h1>

        <p className={styles.home_paragraph}>
          Discover an amazing holiday corner where cosiness meets mountain
          peaks.
          <br />
          Perfect place for romantic escapes, family adventures and relaxation
          with yourself.
          <br />
          Come and create unforgettable memories!
        </p>

        <Link href="/cabins" className={styles.home_link}>
          Select cabins
        </Link>
      </div>
    </div>
  );
}

export default AppPage;
