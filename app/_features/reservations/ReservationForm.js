"use client"; // Client-side

import { useReservation } from "./ReservationContext";
import { createBooking } from "@/app/_library/actions";
import { differenceInDays } from "date-fns";
import SubmitButton from "@/app/_components/button/SubmitButton";
import styles from "@/app/_styles/pages/ReservationPage.module.css";

function ReservationForm({ cabin }) {
  // Range properties
  const { range, resetRange } = useReservation();

  // Cabin properties
  const { maxCapacity, regularPrice, id } = cabin;

  // Start date
  const startDate = range.from;
  // End date
  const endDate = range.to;
  // Number of nights | calculate how many full days are between dates
  const numNights = differenceInDays(endDate, startDate) + 1;
  // Cabin price
  const cabinPrice = numNights * regularPrice;

  // Booking data | all collected properties
  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };
  // Server Action data | pass booking data as a first argument, in addition form data
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

// Date-FNS
// - differenceInDays: get the number of full days between two dates
// Props: arguments passed into React components
// - value{}: specifies the value of the form element
// - key{}: each child in a list should have a unique "key" prop
// # auth
// - referrerPolicy: no-referrer | sent requests do not include any referrer information | important to display google profile images
// # form
// - action: specifies where to send the form-data after the submission
// - name: specifies the name of a form element | reference form data after the submission
// - defaultValue{}: the intitial value of a field
// Methods
// - array.from(): returns a new array from any object(with a length property)
// -- {length}: specifies the length of the array
// -- (_, index): a function that determines the values of the array elements | optional
// --- (_): for the element value - undefined / (index) - for the element index
// - map(): returns a new array containing the results of operations with all array elements
// -- (value) | the value of the current element
// - bind(): allows an object to borrow a method from another object and return new function | the context should be passed as the first parameter, and the function parameters as following parameters
// -- (null): don't provide any context for the new function
// Operators
// - && | AND(choice: the first false or the last true)
// - ?: | condition ? expression 1(true) : expression 2(false)
