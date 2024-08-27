import {
  getBookedDatesByCabinId,
  getSettings,
} from "@/app/_library/data-service";
import DateSelector from "@/app/_components/date/DateSelector";
import ReservationForm from "./ReservationForm";
import styles from "@/app/_styles/pages/ReservationPage.module.css";

async function Reservation({ cabin }) {
  const { name } = cabin;
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
