import type React from "react"
import type { Metadata } from "next"
import { Montserrat_Alternates, Inter } from "next/font/google"
import "./globals.css"

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-montserrat-alternates",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lumina Beauty - Glow Naturally. Shine Beautifully.",
  description:
    "Discover natural beauty and skincare products that enhance your radiant skin and healthy hair with luxurious, futuristic elegance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserratAlternates.variable} ${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
