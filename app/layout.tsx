import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
