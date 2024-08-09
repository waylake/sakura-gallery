import { useState, useEffect } from "react";
import { setItem, getItem } from "../utils/localStorage";

const THEME_KEY = "cherry-blossom-theme";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(() => getItem(THEME_KEY, false));

  useEffect(() => {
    setItem(THEME_KEY, darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return { darkMode, toggleTheme };
};
