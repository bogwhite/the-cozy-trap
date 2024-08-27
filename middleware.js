import { auth } from "@/app/_library/auth";

// Authorization result
export const middleware = auth;
// Exclude routes
export const config = {
  matcher: ["/reservations"],
};

// Middleware: run code before a request is completed
// # matching parts
// middleware will be invoked for every route, use matchers to exclude specific routes
// - matcher: filter Middleware to run on specific routes
