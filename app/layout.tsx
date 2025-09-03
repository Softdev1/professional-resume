import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "OGBAJE Stephen - Technical Product Manager",
  description:
    "Technical Product Manager shaping innovative solutions at the intersection of AI, blockchain, and emerging technologies.",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  keywords: "Technical Product Manager, AI, Blockchain, Product Strategy, Remote Work",
  authors: [{ name: "OGBAJE Stephen" }],
  creator: "OGBAJE Stephen",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
