"use client";
import "@fontsource/montserrat"; // Import Montserrat font
import "./globals.css";

import { AuthProvider } from "@/context/useAuth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RootLayoutProps } from "./types";

export default function RootLayout({ children }: RootLayoutProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <html lang="en" suppressHydrationWarning>
          <head />
          <body
            className="min-h-screen bg-background font-sans antialiased"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {children}
          </body>
        </html>
      </AuthProvider>
    </QueryClientProvider>
  );
}
