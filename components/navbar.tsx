"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, Search, Globe, X, Moon, Sun } from "lucide-react"

export function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDarkMode)
  }, [])
  
  useEffect(() => {
    if (!mounted) return
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode, mounted])
  
  if (!mounted) return null

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setSearchQuery("")
    setSearchOpen(false)
  }
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <motion.nav
      className="bg-white dark:bg-gray-900 text-[#0071C5] dark:text-blue-400 sticky top-0 z-50 shadow-sm transition-colors duration-200"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="https://cdn.cookielaw.org/logos/215b83c1-e050-4276-906c-e65481a36156/4e0ec566-94a6-4ca8-9bde-a3e502094286/240d2370-ed0a-4f7c-b2fa-6d10b13ac82c/logo-classicblue-3000px-OneTrust.png"
            alt="Intel Logo"
            width={101}
            height={20}
            priority
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:underline text-[#0071C5] dark:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline text-[#0071C5] dark:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:underline text-[#0071C5] dark:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline text-[#0071C5] dark:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          <button
            aria-label={darkMode ? "Light Mode" : "Dark Mode"}
            className="hover:bg-blue-50 dark:hover:bg-gray-800 p-1 rounded-full transition-colors"
            onClick={toggleDarkMode}
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
          
          <button 
            aria-label="Toggle language" 
            className="flex items-center text-sm hover:underline text-[#0071C5] dark:text-blue-400"
          >
            <Globe className="w-4 h-4 mr-1" />
            <span className="hidden sm:inline">Language</span>
          </button>

          {!searchOpen && (
            <button 
              aria-label="Search" 
              className="hover:bg-blue-50 dark:hover:bg-gray-800 p-1 rounded-full transition-colors"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </button>
          )}

          <Link href="/signin" className="text-sm hover:underline text-[#0071C5] dark:text-blue-400">
            Sign In
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-700 py-3 transition-colors">
          <div className="container mx-auto flex items-center">
            <form onSubmit={handleSearch} className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-grow px-4 py-2 border-2 border-[#0071C5] dark:border-blue-600 rounded-l-md focus:outline-none bg-white dark:bg-gray-800 text-black dark:text-white transition-colors"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#0071C5] dark:bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
            <button 
              onClick={() => setSearchOpen(false)} 
              className="ml-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="block text-[#0071C5] dark:text-blue-400 text-base font-medium hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-[#0071C5] dark:text-blue-400 text-base font-medium hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block text-[#0071C5] dark:text-blue-400 text-base font-medium hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-[#0071C5] dark:text-blue-400 text-base font-medium hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="flex items-center text-[#0071C5] dark:text-blue-400 text-base font-medium hover:underline"
              >
                {darkMode ? (
                  <><Sun className="w-5 h-5 mr-2 text-yellow-500" />Light Mode</>
                ) : (
                  <><Moon className="w-5 h-5 mr-2" />Dark Mode</>
                )}
              </button>
            </li>
            <li>
              <Link
                href="/signin"
                className="block text-[#0071C5] dark:text-blue-400 text-base font-medium hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  )
}
