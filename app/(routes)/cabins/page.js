import { Suspense } from "react";
import CabinList from "@/app/_features/cabins/CabinList";
import Spinner from "@/app/_components/spinner/Spinner";
import Filter from "@/app/_components/filter/Filter";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

async function CabinsPage({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div className={styles.cabins}>
      <h2 className={styles.cabins_heading}>
        Dream cabins.
        <br />
        Rest in the heart of nature
      </h2>
      <p className={styles.cabins_paragraph}>
        Feel the real magic and fabulous atmosphere of mountain cabins! Imagine:
        fresh air, incredible views and cosiness that envelops you from the
        first step.
        <br />
        Here you will find everything you need for a comfortable stay: modern
        amenities, stylish interiors and of course the unique atmosphere of
        mountain nature.
        <br />
        Wake up to birdsong and the sound of a stream, enjoy the warmth of the
        fireplace, go for walks along picturesque trails and discover new
        corners of nature.
      </p>

      <div>
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}

export default CabinsPage;
