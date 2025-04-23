"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)

    // Force dark mode on initial load
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }
  }, [setTheme])

  if (!mounted) {
    return (
      <div className="w-14 h-8 flex items-center bg-black dark:bg-white rounded-full p-1">
        <div className="w-6 h-6 rounded-full bg-white dark:bg-black" />
      </div>
    )
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
    <motion.button
      className={`w-14 h-8 flex items-center ${
        theme === "dark" ? "bg-white" : "bg-black"
      } rounded-full p-1 cursor-pointer transition-all duration-300`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        className={`w-6 h-6 rounded-full ${theme === "dark" ? "bg-black" : "bg-white"} shadow-md`}
        animate={{ x: theme === "dark" ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />
    </motion.button>
  )
}
