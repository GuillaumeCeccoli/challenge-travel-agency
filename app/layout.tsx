import type { Metadata } from "next";
import { Lemon, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});
const lemon = Lemon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lemon",
});

export const metadata: Metadata = {
  title: "Travel Agency - Viking-Tour",
  description: "Challenge la minute de code - Agence de voyage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${lemon.variable}`}>{children}</body>
    </html>
  );
}

