import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/footer";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  // weight: ["800"],
  // variable: "--font-parkinsans",
  // display: "swap",
  // adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "Al Mufawadh | Global Placement Services",
  description: "Al Mufawadh delivers trusted global placement services and tailored recruitment solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${parkinsans.className}`}
      >
      <Navbar />
        {children}
      <FooterSection />
      </body>
    </html>
  );
}
