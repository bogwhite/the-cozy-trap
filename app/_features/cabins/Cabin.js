import { auth } from "@/app/_library/auth";
import {
  CurrencyDollarIcon,
  UsersIcon,
  EyeSlashIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Modal, Open, Window } from "@/app/_components/modal/Modal";
import Image from "next/image";
import Reservation from "@/app/_features/reservations/Reservation";
import LoginMessage from "@/app/_components/message/LoginMessage";
import TextExpander from "@/app/_components/text/TextExpander";
import styles from "@/app/_styles/pages/CabinPage.module.css";

async function Cabin({ cabin }) {
  // Cabin properties
  const { name, maxCapacity, regularPrice, image, description, location } =
    cabin;

  // User data | after user authorised
  const session = await auth();

  return (
    <div className={styles.cabin}>
      <div className={styles.img_box}>
        <Image src={image} alt={`Cabin ${name}`} fill />
        <h4 className={styles.img_heading}>{name}</h4>
      </div>

      <div className={styles.content_box}>
        <div className={styles.description}>
          <h5 className={styles.description_heading}>Description</h5>
          <p className={styles.description_paragraph}>
            <TextExpander>{description}</TextExpander>
          </p>
        </div>

        <div className={styles.services}>
          <h5 className={styles.services_heading}>Services</h5>
          <ul className={styles.services_list}>
            <li className={styles.services_item}>
              <CurrencyDollarIcon />
              <span>{regularPrice}</span>
            </li>
            <li className={styles.services_item}>
              <UsersIcon />
              <span>{maxCapacity} guests</span>
            </li>
            <li className={styles.services_item}>
              <MapPinIcon />
              <span>Located in {location}</span>
            </li>
            <li className={styles.services_item}>
              <EyeSlashIcon />
              <span>Privacy 100% guaranteed</span>
            </li>
          </ul>
        </div>

        {session?.user ? (
          <Modal>
            <Open type="reservation">
              <button className={styles.booking_btn}>Booking Now</button>
            </Open>
            <Window window="reservation">
              <Reservation cabin={cabin} />
            </Window>
          </Modal>
        ) : (
          <Modal>
            <Open type="login">
              <button className={styles.booking_btn}>Booking Now</button>
            </Open>
            <Window window="login">
              <LoginMessage />
            </Window>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Cabin;

// Props: arguments passed into React components
// # {destructuring} | gives you direct access to the properties
// Image
// - local import / {image}: next.js will automatically determine the width and height
// # props
// - fill: allows your image to be sized by its parent element
// Operators
// - ?. | check existing element / returns undefined if an object is undefined or null (instead of an error)
