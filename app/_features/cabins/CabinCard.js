import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, image } = cabin;

  return (
    <li className={styles.card}>
      <div className={styles.img_box}>
        <Image src={image} alt={`Cabin ${name}`} fill className={styles.img} />
      </div>

      <div className={styles.content_box}>
        <div className={styles.info_box}>
          <h3 className={styles.heading}>{name}</h3>

          <span className={styles.tag}>
            <UsersIcon /> {maxCapacity} guests
          </span>
        </div>

        <div className={styles.price_box}>
          <span className={styles.price}>${regularPrice}</span>
          <span> / night</span>
        </div>

        <div className={styles.link_box}>
          <Link href={`/cabins/${id}`} className={styles.link}>
            Review cabin
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CabinCard;
