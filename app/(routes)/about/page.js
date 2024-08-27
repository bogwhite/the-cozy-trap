import { getFeedbacks } from "@/app/_library/data-service";
import Image from "next/image";
import Link from "next/link";
import FeedbackCard from "@/app/_features/feedbacks/FeedbackCard";
import about_main from "@/public/about/about_main.jpeg";
import about_secondary from "@/public/about/about_secondary.jpeg";
import styles from "@/app/_styles/pages/AboutPage.module.css";
import { Suspense } from "react";
import Spinner from "@/app/_components/spinner/Spinner";

// Time of re-fetching data | one day
export const revalidate = 86400;

// Metadata
export const metadata = {
  title: "About",
};

async function AboutPage() {
  // Feedbacks | data from the server
  const feedbacks = await getFeedbacks();

  return (
    <div className={styles.about}>
      <Image
        src={about_main}
        alt="Rest by the fire"
        fill
        className={styles.about_img}
      />

      <div className={styles.heading_box}>
        <h2 className={styles.about_heading}>
          The place where you can relax with the whole family
        </h2>
        <Link href="/cabins" className={styles.about_link}>
          Explore our cabins
        </Link>
      </div>

      <div className={styles.content_box}>
        <div>
          <h4 className={styles.content_heading}>Welcome to The Cozy Trap</h4>
          <p className={styles.content_paragraph}>
            Discover a place where the beauty of nature and the comfort of
            modern life merge in perfect harmony. In the heart of Swiss Bernese
            Oberland lies this magnificent place - a true paradise, ideal for
            escaping from everyday life. But it&apos;s not just about the cozy
            cabins; it&apos;s about the unique experience of reconnecting with
            nature and enjoying the simple pleasures with your family.
            <br />
            <br />
            Our eight cozy cabins provide a comfort base for your vacation, but
            it&apos;s in the surrounding mountains where you&apos;ll find true
            tranquility and freedom. Walking through the dense forests,
            breathing in the fresh mountain air, watching the stars twinkle -
            all this will be part of your experience. You can enjoy this beauty
            around the fireplace or in a hot tub in the open air.
            <br />
            <br />
            This is a place where unforgettable moments are created in a
            luxurious natural environment. Here you can slow down the pace of
            life, relax and feel the joy of being together in beautiful
            surroundings. It&apos;s the perfect place to get away from the
            hustle and bustle and enjoy time with your loved ones in the true
            tranquility of nature.
          </p>
        </div>

        <div>
          <Image
            src={about_secondary}
            alt="Сouple hugging by the fireplace"
            className={styles.content_img}
          />
        </div>
      </div>

      <div className={styles.card_box}>
        <div className={styles.laurel_box}>
          <img
            src="/about/laurel.png"
            alt="Laurel with stars"
            className={styles.laurel_img}
          />
          <h3 className={styles.laurel_heading}>Our Customers</h3>
        </div>

        <ul className={styles.card_layout}>
          {feedbacks.map((feedback) => (
            <Suspense fallback={<Spinner />}>
              <FeedbackCard feedback={feedback} key={feedback.id} />
            </Suspense>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;

// App Router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// Revalidation: is the process of clearing the Data cache and re-fetching the latest data after a certain amount of time
// Suspense: display a fallback until its children have finished loading | let you coordinate which parts of your UI should always display, and which parts should progressively reveal more content in a sequence of loading states
// Image
// # props
// - fill: allows your image to be sized by its parent element
// - quality: the quality of the optimized image | 1 / 100
