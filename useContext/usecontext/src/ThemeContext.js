import {useState,createContext} from 'react'
import React from 'react'
// tao context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
     // mac dinh de theme la mau toi
  const [theme,setTheme] = useState('dark');

  const ToggleTheme = () => {
    // khi theme bang drak thi doi thanh light ; khi thanh light thi doi thanh dark
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const value = {
      theme,
      ToggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
    {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext,ThemeProvider}