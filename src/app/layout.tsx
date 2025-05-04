import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

const courier_prime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier-prime",
  weight: ["400", "700"],
});
export const metadata: Metadata = {
  title: "circl",
  description: "Join the waitlist for circl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courier_prime.className} antialiased`}
      >
            {children}
      </body>
    </html>
  );
}
