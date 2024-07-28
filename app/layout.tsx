import type { Metadata } from "next";
import { ChatBox } from "find-x-ai";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trial for find-x",
  description: "Ai search for web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
      <ChatBox
        config={{ findx_key: process.env.NEXT_PUBLIC_FINDX_KEY!, theme: "dark" }}
      />
    </html>
  );
}
