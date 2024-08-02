import { Metadata } from "next"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-mode="light" className="scroll-smooth">
      <body className="bg-green-100">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
