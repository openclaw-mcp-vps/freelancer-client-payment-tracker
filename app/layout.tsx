import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayTrack – Track Overdue Payments with Automatic Reminders",
  description:
    "Monitors invoice due dates and automatically sends professional payment reminder emails to clients. Built for freelancers, consultants, and design agencies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="f1bd37e4-3e96-4eb0-bcdb-4fcc9b16e489"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
