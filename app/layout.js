import { Manrope, Unbounded } from "next/font/google";
import { ReservationProvider } from "@/app/_features/reservations/ReservationContext";
import Header from "@/app/_components/layout/header/Header";
import Footer from "@/app/_components/layout/footer/Footer";
import "@/app/_styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
});

export const metadata = {
  title: {
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
