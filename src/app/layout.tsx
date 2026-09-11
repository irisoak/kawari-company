import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.kawaricompany.com",
  ),

  title: {
    default:
      "Kawari Company | Safeguarding, Regulation & Independent Review",
    template: "%s | Kawari Company",
  },

  description:
    "Independent consultancy supporting organisations with safeguarding, regulation, governance, investigations and independent reviews.",

  applicationName: "Kawari Company",

  creator: "Kawari Company",
  publisher: "Kawari Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}