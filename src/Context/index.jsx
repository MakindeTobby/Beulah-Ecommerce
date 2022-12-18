import { useState } from 'react';
import { createContext } from 'react'

const ThemeContext = createContext(null); // context
export { ThemeContext };



//Composite component
const ThemeProvider = ({ children }) => {

    // const [theme, setTheme] = useState('light')
    const [cart, setCart] = useState([])
localStorage.setItem('cartArr', JSON.stringify(cart))


    return (
        <ThemeContext.Provider value={{ cart, setCart }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;