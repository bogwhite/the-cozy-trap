import { getGuest, createGuest } from "./data-service";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  // Providers | google
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // Functions
  callbacks: {
    // user verification | false => run middleware(redirect) / true => log-in
    authorized({ auth }) {
      // - user log-in => true
      return !!auth?.user;
    },
    // succesful sign-in | user === data on the server => true / user - data from the provider
    async signIn({ user }) {
      try {
        // - user | identified by email
        const guest = await getGuest(user.email);
        // - no user => create user
        if (!guest)
          await createGuest({ email: user.email, fullName: user.name });
        // - user => true
        return true;
      } catch {
        // - error => false
        return false;
      }
    },
    // user mutation | add guest id from the server to the user data
    async session({ session }) {
      // - user | identified by email
      const guest = await getGuest(session.user.email);
      // - assign property/value
      session.user.guestId = guest.id;
      // - return session
      return session;
    },
  },
  // Pages | redirect after visit the page
  pages: {
    signIn: "/login",
  },
};

// Authentication methods
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

// Operators
// - ?. | check existing element / returns undefined if an object is undefined or null (instead of an error)
// - !! | conversion of any value to the boolean
// # callbacks
// - authorized: verify if the request is authorized to access a page via Middleware
// - signIn: control if a user is allowed to sign-in
// - session: customise the session object to return to the client
