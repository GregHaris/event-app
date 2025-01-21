import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ['400', '500', '600', '700'],
});



export const metadata: Metadata = {
  title: "Event",
  description: "An Event management app",
  icons: '/assets/images/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
