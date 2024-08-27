"use client"; // Client-side

import { useFormStatus } from "react-dom";
import stylesReservation from "@/app/_styles/pages/ReservationPage.module.css";
import stylesFeedback from "@/app/_styles/pages/FeedbackPage.module.css";

function SubmitButton({ children, label, type }) {
  const { pending } = useFormStatus();

  // Styles Submit
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

// Form Status
// - useFormStatus(): provides status information of the form submission
// -- pending: form is pending submission - true / otherwise - false
// Props: arguments passed into React components
// - children: child components of the element passed between tags
// # {destructuring} | gives you direct access to the properties
// Operators
// - ?: | condition ? expression 1(true) : expression 2(false)
