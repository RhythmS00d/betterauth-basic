import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import Image from "next/image";
import Navigation from "@/components/navigation/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Better Auth Login",
  description: "Better Auth Login Page with user dashboard",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <Image
          className="absolute z-[-1] right-0 opacity-55 top-0"
          alt="bg"
          src={"/squareBG.png"}
          width={3840}
          height={2160}
        />
        <Navigation />
        <div className="flex flex-col min-h-screen w-full mx-auto items-center">
          <Toaster
            position="top-right"
            expand={true}
            richColors
            className="z-10"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
