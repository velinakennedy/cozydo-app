"use client";
import Dropdown from "@/app/common/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("default");
  const [currentScheme, setCurrentScheme] = useState("light");

  const themeOptions = ["twilight", "default"];
  const schemeOptions = ["light", "dark"];

  useEffect(() => {
    const savedTheme = localStorage.getItem("data-theme") || "default";
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
    <div className={styles.container}>
      <Dropdown title="Scheme" items={schemeOptions} handleSelection={changeScheme} />
      <Dropdown title="Theme" items={themeOptions} handleSelection={changeTheme} />
    </div>
  );
};

export default ThemeSwitcher;
