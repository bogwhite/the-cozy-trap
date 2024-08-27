"use client"; // Client-side

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

function Filter() {
  // URL reader | query string
  const searchParams = useSearchParams();
  // Router access
  const router = useRouter();
  // URL reader | pathname
  const pathname = usePathname();

  // Active tab | read value or all
  const activeTab = searchParams.get("capacity") ?? "all";

  // Redirect Router
  function handleFilter(filter) {
    // read query string
    const params = new URLSearchParams(searchParams);
    // set value
    params.set("capacity", filter);
    // navigation
    router.replace(`${pathname}?${params}`);
  }

  return (
    <div className={styles.filter_box}>
      <Button filter="all" handleFilter={handleFilter} activeTab={activeTab}>
        All cabins
      </Button>
      <Button filter="small" handleFilter={handleFilter} activeTab={activeTab}>
        2 guests
      </Button>
      <Button filter="medium" handleFilter={handleFilter} activeTab={activeTab}>
        4 &ndash; 6 guests
      </Button>
      <Button filter="large" handleFilter={handleFilter} activeTab={activeTab}>
        8 &ndash; 10 guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeTab, children }) {
  // Style
  const active_tab = filter === activeTab ? `${styles.active_tab}` : null;

  return (
    <button
      className={`${styles.filter_btn} ${active_tab}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;

// App Router
// # url api
// - urlSearchParams: defines methods to work with the query string of URL
// -- set(): sets the value according to the specified search parameter
// # url | query string
// - useSearchParams: used to read the query string in the current URL
// -- get(): returns the value according to the specified search parameter
// # url | pathname
// - usePathname(): used to read the pathname in the current URL
// # router access
// - useRouter: allows to get access to the router object
// -- replace: replaces the current entry in the history stack
// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// - children: child components of the element passed between tags
// # {destructuring} | gives you direct access to the properties
// Methods
// - replace(): returns a new string with the value replaced
// Operators
// - ?? | OR(choice: the first true) | 0 and '' = true / null and undefined = false
// - ?: | condition ? expression 1(true) : expression 2(false)
