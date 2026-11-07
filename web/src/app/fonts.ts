import { Geist, Geist_Mono, Gabarito, Ubuntu_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const gabarito = Gabarito({
  variable: "--font-gabarito-nf",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntu-mono-nf",
  subsets: ["latin"],
  weight: ["400", "700"],
});
