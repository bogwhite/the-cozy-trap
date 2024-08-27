import { Suspense } from "react";
import CabinList from "@/app/_features/cabins/CabinList";
import Spinner from "@/app/_components/spinner/Spinner";
import Filter from "@/app/_components/filter/Filter";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

// Time of re-fetching data | one hour
export const revalidate = 3600;

// Metadata
export const metadata = {
  title: "Cabins",
};

async function CabinsPage({ searchParams }) {
  // Filter url | read value or all
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

// App Router
// # url | query string
// - searchParams: used to read the query string in the current URL
// Revalidation: is the process of clearing the Data cache and re-fetching the latest data after a certain amount of time
// Suspense: display a fallback until its children have finished loading | let you coordinate which parts of your UI should always display, and which parts should progressively reveal more content in a sequence of loading states
// - key: track of suspended components
// Operators
// - ?? | OR(choice: the first true) | 0 and '' = true / null and undefined = false
// - ?. | check existing element / returns undefined if an object is undefined or null (instead of an error)
