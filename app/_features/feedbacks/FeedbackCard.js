import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import styles from "@/app/_styles/pages/AboutPage.module.css";

function FeedbackCard({ feedback }) {
  const { cabinName, fullName, cabinImage, avatarImage, review, userRating } =
    feedback;

  return (
    <li className={styles.card}>
      <Image src={cabinImage} alt="Feedback" fill className={styles.card_img} />

      <div className={styles.card_content}>
        <div className={styles.card_name_box}>
          <span className={styles.card_name}>{cabinName}</span>
          <span className={styles.card_rating}>
            {userRating}.00
            <StarIcon />
          </span>
        </div>

        <div className={styles.card_avatar}>
          <span>{fullName}</span>
          <img src={avatarImage} alt={fullName} />
        </div>

        <div className={styles.card_paragraph_box}>
          <p className={styles.card_paragraph}>{review}</p>
        </div>
      </div>
    </li>
  );
}

export default FeedbackCard;
