import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { FiSun, FiMoon } from 'react-icons/fi'


export default function ThemeToggle(){
const { theme, setTheme } = useContext(ThemeContext)
const isDark = theme === 'dark'
return (
<button
onClick={() => setTheme(isDark ? 'light' : 'dark')}
className="p-2 rounded-full glass hover:scale-105 transition-transform"
aria-label="Toggle theme"
>
{isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
</button>
)
}