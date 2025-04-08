import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-primary border-t border-gray-200">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Kudos Private School Logo"
                width={280}
                height={100}
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Providing quality education and nurturing future leaders through academic excellence, character
              development, and innovative learning.
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/" },
                { name: "Admissions", href: "/" },
                { name: "Academics", href: "/" },
                { name: "Facilities", href: "/" },
                { name: "News & Events", href: "/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-gray-600">08022661392</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-gray-600">info@kudosprivateschool.edu.ng</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-sm text-gray-600">Kudos Private School Campus, Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 3:30 PM</li>
              <li className="text-sm text-gray-600">Saturday: 9:00 AM - 12:00 PM (Activities)</li>
              <li className="text-sm text-gray-600">Sunday: Closed</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Administrative Office</h4>
              <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 4:30 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Kudos Private School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
