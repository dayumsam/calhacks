import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import "./globals.css";
import SignUpPage from "./sign-up/[[...sign-up]]/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100dvh] bg-black`}>
          <SignedOut>
            <SignUpPage/>
          </SignedOut>
          <SignedIn>
            <UserButton />
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
