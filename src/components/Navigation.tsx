"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { to: "/", label: "Strona główna" },
    { to: "/o-nas", label: "O nas" },
    { to: "/galeria", label: "Galeria" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🌱</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Przedszkole Słoneczko</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`px-3 py-2 rounded-md transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md mb-1 transition-colors ${
                  isActive(link.to)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
