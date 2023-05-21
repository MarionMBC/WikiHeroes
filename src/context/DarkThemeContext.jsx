import { createContext, useState } from "react";
export const darkContext = createContext();


export const DarkThemeProvider = ({ children }) => {
    const [darkToggle, setDarkToggle] = useState(localStorage.getItem('theme') === 'true')
    localStorage.setItem('theme', darkToggle)
    const data = { darkToggle, setDarkToggle }
    return (
        <darkContext.Provider value={data}>
            {children}
        </darkContext.Provider>
    )
}

