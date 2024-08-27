import { getCabins } from "@/app/_library/data-service";
import CabinCard from "./CabinCard";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

async function CabinList({ filter }) {
  // Cabins | data from the server
  const cabins = await getCabins();

  // No cabins => No data rendering
  if (!cabins.length) return null;

  // Filter
  let displayedCabins;
  // all
  if (filter === "all") displayedCabins = cabins;
  // small
  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  // medium
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  // large
  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <ul className={styles.list}>
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </ul>
  );
}

export default CabinList;

// Props: arguments passed into React components
// - key{}: each child in a list should have a unique "key" prop
// # {destructuring} | gives you direct access to the properties
// Methods
// - map(): returns a new array containing the results of operations with all array elements
// - filter(): returns a new array containing the array elements that passed a specified condition
// -- (value) | the value of the current element
// Operators
// - && | AND(choice: the first false or the last true)
