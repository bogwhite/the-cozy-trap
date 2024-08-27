import { Manrope, Unbounded } from "next/font/google";
import { ReservationProvider } from "@/app/_features/reservations/ReservationContext";
import Header from "@/app/_components/layout/header/Header";
import Footer from "@/app/_components/layout/footer/Footer";
import "@/app/_styles/globals.css";

// Font
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// Font
const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

// Metadata
export const metadata = {
  title: {
    // title other pages / The Cozy Trap
    template: "%s / The Cozy Trap",
    default: "Welcome / The Cozy Trap",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beatiful mountains and dark forests",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${unbounded.variable}`}>
        <Header />

        <main>
          <ReservationProvider>{children}</ReservationProvider>
        </main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;

// Font
// - subsets: a file that contains a custom collection of glyphs
// - display: swap | the browser will initially show a fallback font, then once the Google Font has downloaded it will swap the fonts
// Props: arguments passed into React components
// - children: child components of the element
// # {destructuring} | gives you direct access to the properties
