"use client";

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
  const { range, setRange } = useReservation();
  const { regularPrice } = cabin;
  const { minBookingLength, maxBookingLength } = settings;

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const numNights = differenceInDays(displayRange.to, displayRange.from) + 1;
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
