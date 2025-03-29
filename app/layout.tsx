import type React from "react"
import "./globals.css";
import { Playfair_Display, Lato } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata = {
  title: "Vinícius Gomes | Psicólogo",
  description: "Psicólogo em São Paulo. Atendimento presencial e online. Agende sua consulta.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/icon.png" type="image/png" />
      </head>
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>{children}</body>
    </html>
  )
}

