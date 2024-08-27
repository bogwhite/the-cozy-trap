"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import supabase from "./supabase";

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }

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

  const { error } = await supabase.from("bookings").insert([newBooking]);
  if (error) {
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

export async function deleteBooking(bookingId) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to delete this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);
  if (error) {
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/reservations");
}

export async function getFeedback(formData) {
  const session = await auth();
  if (!session) {
    throw new Error("You must be logged in");
  }

  const bookingId = Number(formData.get("bookingId"));
  const updateData = {
    userRating: Number(formData.get("userRating")),
    review: formData.get("review").slice(0, 1000),
  };

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You are not allowed to update this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId)
    .select()
    .single();
  if (error) {
    throw new Error("Booking could not be updated");
  }

  revalidatePath(`/reservations/feedback/${bookingId}`);
  revalidatePath("/reservations");

  redirect("/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/reservations" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
