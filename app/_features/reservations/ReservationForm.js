"use client";

import { useReservation } from "./ReservationContext";
import { createBooking } from "@/app/_library/actions";
import { differenceInDays } from "date-fns";
import SubmitButton from "@/app/_components/button/SubmitButton";
import styles from "@/app/_styles/pages/ReservationPage.module.css";

function ReservationForm({ cabin }) {
  const { range, resetRange } = useReservation();

  const { maxCapacity, regularPrice, id } = cabin;

  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate) + 1;
  const cabinPrice = numNights * regularPrice;

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };
  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <form
      action={async (formData) => {
        await createBookingWithData(formData);
        resetRange();
      }}
      className={styles.reservation_form}
    >
      <div>
        <label htmlFor="numGuests" className={styles.form_label}>
          How many guests?
        </label>
        <select
          name="numGuests"
          id="numGuests"
          required
          className={`${styles.form_select} ${styles.select_dropdown}`}
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, index) => index + 1).map(
            (capacity) => (
              <option value={capacity} key={capacity}>
                {capacity} {capacity === 1 ? "guest" : "guests"}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label htmlFor="phoneNumber" className={styles.form_label}>
          Phone number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          defaultValue="+380"
          required
          className={styles.form_input}
        />
      </div>

      <div>
        <label htmlFor="observations" className={styles.form_label}>
          Anything we should know about your stay?
        </label>
        <textarea
          type="text"
          name="observations"
          id="observations"
          placeholder="Arrival time, any pets, special requirements?"
          className={styles.form_textarea}
        />
      </div>

      <div className={styles.action_box}>
        {range.from || range.to ? (
          <button className={styles.clear_btn} onClick={() => resetRange()}>
            Clear date
          </button>
        ) : null}

        {!(startDate && endDate) ? (
          <p className={styles.selecting_text}>Selecting dates...</p>
        ) : (
          <SubmitButton label="Booking..." type="reservation">
            Submit
          </SubmitButton>
        )}
      </div>
    </form>
  );
}

export default ReservationForm;
