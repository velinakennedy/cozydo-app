import type { Metadata } from "next";
import "./globals.css";
import ThemeSwitcher from "./components/helpers/ThemeSwitcher";

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
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
