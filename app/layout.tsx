import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactWidget } from "./components/ContactWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Oladele — AI Automation Specialist",
  description:
    "AI Automation Specialist building agentic systems, RPA, and workflow orchestration. Shipped 8+ autonomous agents across finance, HR, and marketing.",
  metadataBase: new URL("https://danieloladele.dev"),
  openGraph: {
    title: "Daniel Oladele — AI Automation Specialist",
    description:
      "AI Automation Specialist building agentic systems, RPA, and workflow orchestration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ContactWidget />
      </body>
    </html>
  );
}
