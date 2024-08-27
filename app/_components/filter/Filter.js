"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "@/app/_styles/pages/CabinsPage.module.css";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
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
