"use client";

import { Modal, Open, Window } from "@/app/_components/modal/Modal";
import { deleteBooking } from "@/app/_library/actions";
import { TrashIcon } from "@heroicons/react/24/solid";
import ConfirmDelete from "@/app/_features/reservations/ConfirmDeleteReservation";
import styles from "@/app/_styles/pages/ReservationsPage.module.css";

function DeleteReservation({ bookingId }) {
  return (
    <Modal>
      <Open type="delete">
        <button className={styles.delete_btn}>
          <TrashIcon />
          <span>Delete</span>
        </button>
      </Open>
      <Window window="delete">
        <ConfirmDelete onConfirm={() => deleteBooking(bookingId)} />
      </Window>
    </Modal>
  );
}

export default DeleteReservation;
