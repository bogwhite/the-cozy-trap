import { auth } from "@/app/_library/auth";
import { getBookings } from "@/app/_library/data-service";
import ReservationCard from "@/app/_features/reservations/ReservationCard";
import Link from "next/link";
import styles from "@/app/_styles/pages/ReservationsPage.module.css";

// Metadata
export const metadata = {
  title: "Reservations",
};

async function ReservationsPage() {
  // session | after user authorised / data from the provider
  const session = await auth();
  // bookings | data from the server
  const bookings = await getBookings(session.user.guestId);

  return (
    <div className={styles.reservations}>
      <h4 className={styles.reservations_heading}>Your reservations</h4>

      {bookings.length === 0 ? (
        <p className={styles.reservations_paragraph}>
          You have no reservations yet. Choose your{" "}
          <Link href="/cabins" className={styles.reservations_link}>
            perfect cabin &rarr;
          </Link>
        </p>
      ) : (
        <ul className={styles.reservations_list}>
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReservationsPage;

// App router
// - link: sets the URL
// -- href: the path to link
// --- /: back to the root route
// Props: arguments passed into React components
// - key{}: each child in a list should have a unique "key" prop
// Methods
// - map(): returns a new array containing the results of operations with all array elements
// -- (value) | the value of the current element
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
