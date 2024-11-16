"use client";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("theme-1");
  const [currentScheme, setCurrentScheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme") || "default-theme";
    const savedScheme = localStorage.getItem("data-scheme") || "light";
    setCurrentTheme(savedTheme);
    setCurrentScheme(savedScheme);

    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.setAttribute("data-scheme", savedScheme);
  }, []);

  const changeTheme = (theme: string) => {
    if (currentTheme !== theme) {
      localStorage.setItem("data-theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
      setCurrentTheme(theme);
    }
  };

  const changeScheme = (scheme: string) => {
    if (currentScheme !== scheme) {
      localStorage.setItem("data-scheme", scheme);
      document.documentElement.setAttribute("data-scheme", scheme);
      setCurrentScheme(scheme);
    }
  };

  return (
    <div>
      <h3>Choose Theme:</h3>
      <button onClick={() => changeTheme("theme-1")}>Theme 1</button>
      <button onClick={() => changeTheme("default-theme")}>Default Theme</button>

      <h3>Choose Color Scheme:</h3>
      <button onClick={() => changeScheme("light")}>Light Mode</button>
      <button onClick={() => changeScheme("dark")}>Dark Mode</button>
    </div>
  );
};

export default ThemeSwitcher;
