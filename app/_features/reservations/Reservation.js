import {
  getBookedDatesByCabinId,
  getSettings,
} from "@/app/_library/data-service";
import DateSelector from "@/app/_components/date/DateSelector";
import ReservationForm from "./ReservationForm";
import styles from "@/app/_styles/pages/ReservationPage.module.css";

async function Reservation({ cabin }) {
  // Cabin properties
  const { name } = cabin;

  // Settings / Booked dates | data from the server
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <>
      <h4 className={styles.reservation_heading}>{name}</h4>
      <div className={styles.reservation}>
        <DateSelector
          cabin={cabin}
          settings={settings}
          bookedDates={bookedDates}
        />
        <ReservationForm cabin={cabin} />
      </div>
    </>
  );
}

export default Reservation;

// Methods
// - Promise.all(): returns a single Promise from a list of promises, when all promises fulfill
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
// Assignment
// {destructuring} | gives you direct access to the properties
// HTML
// - <></>: let you group a list of children elements without adding extra nodes to the DOM
