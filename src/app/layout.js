import localFont from "next/font/local";
import "./globals.css";
import FocusTimer from "./course/start/components/FocusTimer";
import HomeNavigationIcon from "./course/start/components/GoBack";
import ChatBot from "./jobPreparation/components/ChatBot";
import NavBar from "./components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ai Powered career coach",
  description: "ideathon hackthon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        {children}
      </body>
    </html>
  );
}
