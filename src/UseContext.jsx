import React , {createContext , useContext , useState} from "react";

const ThemeContext = createContext();

function ContextEX() {
    const [theme , setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            <div
                style={{
                    background: theme === "light" ? "#fff" : "#333",
                    color: theme === "light" ? "#000" : "#fff",
                    height: "100vh",
                    padding: "20px"
                }}
            >
                <h1>UseContext Example</h1>
                <Toolbar />
            </div>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <h2>Toolbar Component</h2>
            <ThemeButton />
        </div>
    )
}

function ThemeButton() {
    const { theme , toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Current Theme : {theme} (Click to toggle)
        </button>
    )
}

export default ContextEX;