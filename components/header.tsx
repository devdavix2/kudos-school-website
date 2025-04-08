"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Academics", href: "/" },
  { name: "Admissions", href: "/" },
  { name: "Contact", href: "/" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white",
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Kudos Private School Logo"
              width={300}
              height={100}
              className="h-20 w-auto"
            />
          </Link>
        </div>

        <div className="hidden md:flex md:gap-x-8 items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4 border-l pl-4 border-gray-200">
            <Phone className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium">08022661392</span>
          </div>
          <Button asChild size="lg" className="ml-4 bg-primary hover:bg-primary/90 animate-pulse">
            <Link href="/">Apply Now</Link>
          </Button>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("fixed inset-0 z-50 bg-white md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image src="/images/logo.png" alt="Kudos Private School Logo" width={180} height={60} />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium">08022661392</span>
                  </div>
                  <Button asChild className="w-full">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
