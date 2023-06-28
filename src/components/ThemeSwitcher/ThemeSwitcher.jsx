import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia("prefer-color-scheme: dark").matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            <button className="text-2xl bg-slate-400 p-2 rounded-lg" onClick={handleThemeSwitch}>
                {
                    theme === 'dark' ? <BsFillMoonFill className="text-black" /> : <BsFillSunFill className="text-white" />
                }
            </button>
        </div>
    );
};

export default ThemeSwitcher;