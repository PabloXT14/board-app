import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Board App",
  description: "A simple board app to manage your tasks and projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-navy-950 text-navy-50 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
