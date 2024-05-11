import "@fontsource/montserrat"; // Import Montserrat font
import type { Metadata } from "next";
import "./globals.css";

import { RootLayoutProps } from "./types";

export const metadata: Metadata = {
  title: "Shipping App",
  description: "Olasunkanmi Idris Technical Assessment",
};
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className="min-h-screen bg-background font-sans antialiased"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
