import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timely",
  description: "A simple time tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>

      </head>
      <body className={inter.className}>

        <Toaster />
        {children}</body>
    </html>
  );
}
