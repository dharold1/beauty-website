import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Favicon from '/public/favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lavender Looks",
  description:
    "Welcome to Lavender Looks, your ultimate destination for all things makeup and beauty. Immerse yourself in a world of glamour, creativity, and self-expression as we unlock the secrets to enhancing your natural beauty.",
    icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
