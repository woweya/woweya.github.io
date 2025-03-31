"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "dark", setTheme: () => null })

export function ThemeProvider({ children, defaultTheme = "dark", storageKey = "vite-ui-theme" }) {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(storageKey)
        return storedTheme || defaultTheme
    })

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
        localStorage.setItem(storageKey, theme)
    }, [theme, storageKey])

    const value = {
        theme,
        setTheme: (newTheme) => setTheme(newTheme),
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

export default ThemeProvider