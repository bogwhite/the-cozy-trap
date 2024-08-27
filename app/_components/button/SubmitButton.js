"use client";

import { useFormStatus } from "react-dom";
import stylesReservation from "@/app/_styles/pages/ReservationPage.module.css";
import stylesFeedback from "@/app/_styles/pages/FeedbackPage.module.css";

function SubmitButton({ children, label, type }) {
  const { pending } = useFormStatus();

  function submit_theme() {
    if (type === "reservation") return stylesReservation.submit_btn;
    if (type === "feedback") return stylesFeedback.submit_btn;
  }

  return (
    <button disabled={pending} className={submit_theme()}>
      {pending ? label : children}
    </button>
  );
}

export default SubmitButton;
