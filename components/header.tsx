"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg">
          <div className="flex items-center gap-1">
            {/* Four SVG bars placed in public/ as requested. If your filenames differ, update the src values accordingly. */}
            <img src="/blue.svg" alt="" className="w-2 h-6" />
            <img src="/red.svg" alt="" className="w-2 h-6" />
            <img src="/green.svg" alt="" className="w-2 h-6" />
            <img src="/yellow.svg" alt="" className="w-2 h-6" />
          </div>
          <span className="hidden sm:inline">GDG Portfolio Generator</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="#faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-4">
          <Link href="#" className="text-foreground">
            Home
          </Link>
          <Link href="#about" className="text-foreground">
            About
          </Link>
          <Link href="#contact" className="text-foreground">
            Contact
          </Link>
          <Link href="#faq" className="text-foreground">
            FAQ
          </Link>
          <Button variant="outline" className="w-full bg-transparent">
            Login
          </Button>
        </div>
      )}
    </header>
  )
}
