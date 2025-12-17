"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const [theme, setThemeState] = React.useState<"light" | "dark">("light")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const savedTheme = document.documentElement.classList.contains("dark") ? "dark" : "light"
    setThemeState(savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setThemeState(newTheme)
    document.documentElement.classList.toggle("dark")
  }

  if (!mounted) {
    return { theme: "light" as const, toggleTheme: () => {} }
  }

  return { theme, toggleTheme }
}
