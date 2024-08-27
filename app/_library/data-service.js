import { notFound } from "next/navigation";
import { eachDayOfInterval } from "date-fns";
import supabase from "./supabase";

////// GET //////
export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, image")
    .order("regularPrice");
  if (error) {
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function getCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    notFound();
  }
  return data;
}

export async function getBookings(guestId) {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image), userRating, review"
    )
    .eq("guestId", guestId)
    .order("startDate");
  if (error) {
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("Booking could not get loaded");
  }
  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);
  if (error) {
    throw new Error("Bookings could not get loaded");
  }

  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();
  return bookedDates;
}

export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();
  if (error) {
    throw new Error("Settings could not be loaded");
  }
  return data;
}

export async function getFeedbacks() {
  const { data, error } = await supabase.from("feedbacks").select("*");
  if (error) {
    throw new Error("Feedbacks could not be loaded");
  }
  return data;
}

////// CREATE //////
export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);
  if (error) {
    throw new Error("Guest could not be created");
  }
  return data;
}
