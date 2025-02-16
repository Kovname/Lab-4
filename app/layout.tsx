import Link from "next/link"
import { Button } from "@/components/ui/button"
import type React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body>
        <header className="border-b">
          <div className="container flex items-center justify-between h-16 gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="font-semibold">Untitled UI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost">Продукти</Button>
              <Button variant="ghost">Послуги</Button>
              <Button variant="ghost">Ціни</Button>
              <Button variant="ghost">Ресурси</Button>
              <Button variant="ghost">Про нас</Button>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-2">
                Увійти
              </Button>
              <Button className="bg-primary hover:bg-primary/90">Реєстрація</Button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
