import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import MonthCalendar from "./components/MonthCalendar/MonthCalendar";

export const metadata: Metadata = {
  title: "CozyDo App",
  description: "planner for balancing productivity and relaxation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <MonthCalendar />
        {children}
      </body>
    </html>
  );
}
