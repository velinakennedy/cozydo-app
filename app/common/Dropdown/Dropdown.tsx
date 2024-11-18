"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  title,
  items,
  handleSelection,
  customStyle,
}: {
  title: string;
  items: string[];
  handleSelection: CallableFunction;
  customStyle?: string;
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!dropdown.current?.contains(e.target as Node)) {
        setIsActive(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div ref={dropdown} className={`${styles.container} ${customStyle}`}>
      <button className={styles.button} onClick={handleToggle}>
        {title}
      </button>
      <div className={isActive ? `${styles.dropdown}` : `${styles.hide}`}>
        {items.map((item: string) => {
          return (
            <button className={styles.button} key={item} onClick={() => handleSelection(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Dropdown;
