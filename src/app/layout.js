import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Your NextJS Project',
    template: '%s | Developer Ujjal'
  },
  description: "Hey, you know what this is mine website and i'm make it by my own",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <NavBar />
        </header>
        <main>
          <div className="">
            {children}
          </div>
        </main>
        <footer>
          <p className="text-center py-2 bg-gray-100">Created by Developer Ujjal</p>
        </footer>
      </body>
    </html>
  );
}
