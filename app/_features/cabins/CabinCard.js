import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

function CabinCard({ cabin }) {
  // Cabin properties
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

// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// Image
// - local import / {image}: next.js will automatically determine the width and height
// Props: arguments passed into React components
// Assignment
// {destructuring} | gives you direct access to the properties
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// HTML
// - <></>: let you group a list of children elements without adding extra nodes to the DOM
