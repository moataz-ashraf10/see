import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./compents/header";
import Footer from "./compents/footer";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import dynamic from "next/dynamic";
export const metadata: Metadata = {
  title: "Matrix | Home",
  description: "Your style destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header></Header>
          <hr />
          {children}
          <Footer></Footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
