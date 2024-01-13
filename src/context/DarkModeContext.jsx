import {createContext, useContext, useEffect, useState} from "react";
import useLocalStorageState from "../hooks/useLocalStorageState.js";

const DarkModeContext = createContext()

export function DarkModeProvider({children}) {

    const [isDarkMode, setIsDarkMode] = useLocalStorageState("darkMode", window.matchMedia("(prefers-color-scheme: dark)").matches)
    const toggleDarkMode = () => setIsDarkMode(prevState => !prevState)
    return <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (context === undefined) throw new Error("dark mode context was used outside of dark mode provider")
    return context
}