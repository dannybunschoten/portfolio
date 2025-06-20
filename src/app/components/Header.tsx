"use client";

import Link from "next/link";
import InitialLogo from "../images/InitialLogo";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";

const sections = [
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ FIX 1: Throttled scroll listener
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev)); // Prevent unnecessary re-renders
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      // ✅ FIX 2: Reduced backdrop blur + better mobile performance
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-zinc-200/50" // Reduced blur & shadow
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: isScrolled ? "auto" : "transform" }} // Optimize will-change
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group flex gap-2 items-center">
            <InitialLogo />
            <div className="flex flex-col">
              {/* ✅ FIX 3: Simplified gradient hover - use transform instead */}
              <motion.span
                className="text-xl font-bold text-zinc-900 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                Danny Bunschoten
                {/* Gradient overlay that slides in on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Danny Bunschoten
                </motion.div>
              </motion.span>
              <motion.span
                className="text-xs text-zinc-500 font-medium tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Full-Stack Developer
              </motion.span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="relative px-4 py-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium group cursor-pointer"
              >
                <span>{section.text}</span>
                {/* ✅ This underline animation is already optimized (uses width/left) */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                asChild
              >
                <Link href="/CV Danny Bunschoten.pdf" download>
                  <Download className="size-4 mr-2" />
                  Resume
                </Link>
              </Button>
            </motion.div>

            {/* ✅ FIX 4: Simplified gradient button hover */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-lg cursor-pointer transition-shadow duration-300"
                asChild
                style={{ willChange: "transform" }} // Only animate transform
              >
                <a
                  href="https://linkedin.com/in/danny-bunschoten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button - Already optimized */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* SVG icons - already optimized */}
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation - Consider using AnimatePresence for smoother transitions */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-zinc-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="block px-3 py-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {section.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
