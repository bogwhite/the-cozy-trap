"use server"; // Server-side

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import supabase from "./supabase";

// Create Booking
export async function createBooking(bookingData, formData) {
  // 1) Authentication
  // check if user authorised
  const session = await auth();
  // no session data => error
  if (!session) {
    throw new Error("You must be logged in");
  }

  // 2) Creating new booking
  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    phoneNumber: Number(formData.get("phoneNumber")),
    observations: formData.get("observations").slice(0, 1000),
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    status: "unconfirmed",
  };

  // 3) Mutation
  // update data on the server | create the booking row
  const { error } = await supabase.from("bookings").insert([newBooking]);
  // error
  if (error) {
    throw new Error("Booking could not be created");
  }

  // 4) Revalidation
  // re-fetch data | clear cache
  revalidatePath(`/cabins/${bookingData.cabinId}`);

  // 5) Navigation
  // redirect page
  redirect("/cabins/thankyou");
}

// Delete Booking
export async function deleteBooking(bookingId) {
  // 1) Authentication
  // check if user authorised
  const session = await auth();
  // no session data => error
  if (!session) {
    throw new Error("You must be logged in");
  }

  // 2) Authorization
  // get bookings | data from the server
  const guestBookings = await getBookings(session.user.guestId);
  // get all bookings id
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  // check if bookings id include booking id
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }

  // 3) Mutation
  // update data on the server | delete row by id
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);
  // error
  if (error) {
    throw new Error("Booking could not be deleted");
  }

  // 4) Revalidation
  // re-fetch data | clear cache
  revalidatePath("/reservations");
}

// Get Feedback
export async function getFeedback(formData) {
  // 1) Authentication
  // check if user authorised
  const session = await auth();
  // no session data => error
  if (!session) {
    throw new Error("You must be logged in");
  }

  // 2) Data
  // get bookingId | convert value to number
  const bookingId = Number(formData.get("bookingId"));
  // get data | rating / review
  const updateData = {
    userRating: Number(formData.get("userRating")),
    review: formData.get("review").slice(0, 1000),
  };

  // 3) Authorization
  // get bookings | data from the server(id)
  const guestBookings = await getBookings(session.user.guestId);
  // get all bookings id
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  // check if bookings id include booking id
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to update this booking");
  }

  // 4) Mutation
  // update data on the server | update booking row by id
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();
  // error
  if (error) {
    throw new Error("Booking could not be updated");
  }

  // 5) Revalidation
  // re-fetch data | clear cache
  revalidatePath(`/reservations/feedback/${bookingId}`);
  revalidatePath("/reservations");

  // 6) Navigation
  // redirect page
  redirect("/reservations");
}

// Sign-in | redirect after form is submitted
export async function signInAction() {
  await signIn("google", { redirectTo: "/reservations" });
}
// Sign-out | redirect after form is submitted
export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}

// Server Actions: handle form submissions and data mutations on the server
// App Router
// # navigation
// - redirect(): redirects to another route
// Props: arguments passed into React components
// - key{}: each child in a list should have a unique "key" prop
// Methods
// - split(): splits elements and store data into an array
// - slice(): returns selected elements of an array
// - test(): searches for a match in a string | if it finds a match - true / otherwise - false
// - map(): returns a new array containing the results of operations with all array elements
// -- (value) | the value of the current element
// # http
// - get(): request data from a specified resource
// # cache
// - revalidatePath: clear cached for a specified route
// Operators
// # ...spread
// - {...object} | unpack properties
