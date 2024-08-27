"use client"; // Client-side

import { useReservation } from "@/app/_features/reservations/ReservationContext";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import { MoonIcon } from "@heroicons/react/24/outline";
import "react-day-picker/dist/style.css";
import styles from "@/app/_styles/pages/ReservationPage.module.css";

// Сheck the existence of already booked dates | prevent to choose already booked dates
function isAlreadyBooked(range, datesArray) {
  return (
    range.from &&
    range.to &&
    datesArray.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ cabin, settings, bookedDates }) {
  // Range properties
  const { range, setRange } = useReservation();
  // Cabin properties
  const { regularPrice } = cabin;
  // Settings properties
  const { minBookingLength, maxBookingLength } = settings;

  // Display range | no booked dates => display range
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  // Number of nights | calculate how many full days are between dates
  const numNights = differenceInDays(displayRange.to, displayRange.from) + 1;
  // Cabin price
  const cabinPrice = numNights * regularPrice;

  return (
    <div className={styles.date_selector}>
      <DayPicker
        className={styles.day_picker}
        mode="range"
        onSelect={(range) => setRange(range)}
        selected={displayRange}
        min={minBookingLength}
        max={maxBookingLength}
        captionLayout="buttons"
        numberOfMonths={1}
        // check if the date include past days or booked dates
        disabled={(date) =>
          isPast(date) || bookedDates.some((booked) => isSameDay(booked, date))
        }
      />

      <div className={styles.summary}>
        {numNights ? (
          <>
            <span className={styles.summary_nights}>
              <MoonIcon />
              {numNights} nights
            </span>
            <span className={styles.summary_total}>
              ${regularPrice} x {numNights} = <span>${cabinPrice}</span>
            </span>
          </>
        ) : (
          <span className={styles.summary_price}>${regularPrice} / night</span>
        )}
      </div>
    </div>
  );
}

export default DateSelector;

// State
// - useState(): allows you to add state to a functional component
// -- [first value] | the current state
// -- [second value] | the function that updates the state
// Date-FNS
// - differenceInDays: get the number of full days between two dates
// - isPast: check if the given date is in the past
// - isSameDay: check if the given date is in the same day(and year and month) | first date / second date
// - isWithinInterval: check if the given date within the interval
// Props: arguments passed into React components
// - onClick(): calls a function when a button is clicked
// # day picker
// - mode: allows to select days
// - onSelect: select a range of days when is clicked
// - selected: display the selected range of days
// -- single: select only one day
// -- multiple: select multiple days
// -- range: select a range of days | from / to
// - min/max: the amount of days that can be selected
// - fromMonth: the month to start the navigation
// - fromDay: the day to start the navigation
// - toYear: the latest year of the navigation
// - captionLayout: change the layout of the caption
// -- buttons: display prev/right buttons to change the month and the year
// -- dropdown: display drop-downs to change the month and the year
// - numberOfMonths: the number of displayed months
// - disabled: the disabled modifier to the matching days
// Assignment
// - {destructuring} | gives you direct access to the properties
// Methods
// - some(): checks if any array elements passed a specified condition | true / false
// # date
// - new Date(): an object with the current date and time
// -- getFullYear(): returns the full year of a date
// Operators
// - && | AND(choice: the first false or the last true)
// - || | OR(choice: the first true)
// - ?: | condition ? expression 1(true) : expression 2(false)
// HTML
// - <></>: let you group a list of children elements without adding extra nodes to the DOM
