import { format, isPast } from "date-fns";
import { MoonIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import DeleteReservation from "./DeleteReservation";
import UserFeedback from "@/app/_features/feedbacks/UserFeedback";
import styles from "@/app/_styles/pages/ReservationsPage.module.css";

function ReservationCard({ booking }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    userRating,
    cabins: { name, image },
  } = booking;

  return (
    <div className={styles.card}>
      <div className={styles.img_box}>
        <Image src={image} alt={`${name}`} fill className={styles.card_img} />
      </div>

      <div className={styles.content_box}>
        <div className={styles.heading_box}>
          <h5 className={styles.card_name}>{name}</h5>
          <p className={styles.card_date}>
            {format(new Date(startDate), "dd.MM.yyyy")} &mdash;{" "}
            {format(new Date(endDate), "dd.MM.yyyy")}
          </p>
        </div>

        <div className={styles.tag_box}>
          {isPast(new Date(startDate)) ? (
            <span className={`${styles.tag} ${styles.tag_past}`}>past</span>
          ) : (
            <span className={`${styles.tag} ${styles.tag_upcoming}`}>
              upcoming
            </span>
          )}
        </div>

        <div className={styles.info_box}>
          <p className={`${styles.info} ${styles.info_price}`}>${totalPrice}</p>
          <span className={styles.info_bull}>&bull;</span>
          <p className={styles.info}>
            <UsersIcon />
            <span>
              {numGuests} guest{numGuests > 1 && "s"}
            </span>
          </p>
          <span className={styles.info_bull}>&bull;</span>
          <p className={styles.info}>
            <MoonIcon />
            <span>
              {numNights} night{numNights > 1 && "s"}
            </span>
          </p>
        </div>

        <div className={styles.action_box}>
          {!isPast(startDate) ? (
            <DeleteReservation bookingId={id} />
          ) : (
            <UserFeedback userRating={userRating} bookingId={id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
