import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/footer";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  // weight: ["800"],
  // display: "swap",
  // adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "Al Mufawadh",
  description: "A recruitment agency that connects talented individuals with the right opportunities.",
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
        <main> 
          {children} 
          </main> 
      <FooterSection />
      </body>
    </html>
  );
}
