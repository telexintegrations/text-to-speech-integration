import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Get Productive | Timer for Better Study, Work, and Creative Sessions",
  description: "A minimalist focus timer that helps you build better work habits by encouraging single-tasking and flow states. Track tasks, maintain focus, and improve productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        {children}
      </body>
    </html>
  );
}
