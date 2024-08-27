import { notFound } from "next/navigation";
import { eachDayOfInterval } from "date-fns";
import supabase from "./supabase";

////// GET //////

// Cabins API
export async function getCabins() {
  // request data from the server | read selected rows(ordered by price)
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, image")
    .order("regularPrice");
  // error
  if (error) {
    throw new Error("Cabins could not be loaded");
  }
  // return data
  return data;
}

// Cabin API
export async function getCabin(id) {
  // request data from the server | read the row by id
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();
  // error
  if (error) {
    // - redirect to the page not-found
    notFound();
  }
  // return data
  return data;
}

// Bookings API
export async function getBookings(guestId) {
  // request data from the server | read selected rows by id
  const { data, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image), userRating, review"
    )
    .eq("guestId", guestId)
    .order("startDate");
  // error
  if (error) {
    throw new Error("Bookings could not get loaded");
  }
  // return data
  return data;
}

// Booking API
export async function getBooking(id) {
  // request data from the server | read all rows by id
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();
  // error
  if (error) {
    throw new Error("Booking could not get loaded");
  }
  // return data
  return data;
}

// Booked Dates API
export async function getBookedDatesByCabinId(cabinId) {
  // 1) Current date
  // get current date
  let today = new Date();
  // set time of the date | 00:00:00:00
  today.setUTCHours(0, 0, 0, 0);
  // format date | YYYY-MM-DDTHH:mm:ss
  today = today.toISOString();

  // 2) Mutation
  // request data from the server | read all rows by id or rows matching one of the filters
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    // startDate === today / status === checked-in
    .or(`startDate.gte.${today},status.eq.checked-in`);
  // error
  if (error) {
    throw new Error("Bookings could not get loaded");
  }

  // 3) Converting dates for using in the date picker
  // date interval | all entries(start > end)
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  // 4) Return
  // return data
  return bookedDates;
}

// Guest API | guests are identified by their email address
export async function getGuest(email) {
  // request data from the server | read all rows by email address
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();
  // return data
  return data;
}

// Settings API
export async function getSettings() {
  // request data from the server | read all rows
  const { data, error } = await supabase.from("settings").select("*").single();
  // error
  if (error) {
    throw new Error("Settings could not be loaded");
  }
  // return data
  return data;
}

// Feedbacks API
export async function getFeedbacks() {
  // request data from the server | read all rows
  const { data, error } = await supabase.from("feedbacks").select("*");
  // error
  if (error) {
    throw new Error("Feedbacks could not be loaded");
  }
  // return data
  return data;
}

////// CREATE //////

// Create Guest API
export async function createGuest(newGuest) {
  // update data on the server | add new guest row
  const { data, error } = await supabase.from("guests").insert([newGuest]);
  // error
  if (error) {
    throw new Error("Guest could not be created");
  }
  // return data
  return data;
}

// API
// - fetch(): used to request data from a server
// -- json(): a format for storing data
// Date-FNs
// - eachDayOfInterval(): the array of dates within the specified time interval
// Methods
// - map(): returns a new array containing the results of operations with all array elements
// -- (value) | the value of the current element
// - flat(): returns a new array containing all the elements of the nested arrays
// # date
// - new Date(): an object with the current date and time
// - setUTCHours(): sets the hour of a date object according to UTC | 00:00:00:00
// - toISOString(): returns a date object as a string, using the ISO standard | YYYY-MM-DDTHH:mm:ss
