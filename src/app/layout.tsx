import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });

const harmonyos = localFont({
  src: [
    {
      path: '../assets/fonts/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Thin.ttf',
      weight: '300',
      style: 'thin'
    },
    {
      path: '../assets/fonts/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../assets/fonts/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Regular.ttf',
      weight: '400',
      style: 'regular'
    },
    {
      path: '../assets/fonts/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Light.ttf',
      weight: '100',
      style: 'light'
    },
    {
      path: '../assets/fonts/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Medium.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../assets/fonts/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Black.ttf',
      weight: '600',
      style: 'black'
    },
  ],
  variable: '--font-harmonyos-sc'
});

export const metadata: Metadata = {
  title: "MaxAir: Professional pneumatic component manufacturer in China",
  description: "Professional pneumatic component manufacturer in China",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={harmonyos.className}>{children}</body>
    </html>
  );
}
