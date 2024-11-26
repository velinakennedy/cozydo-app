"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TwoColumnDropdown.module.css";

const TwoColumnDropdown = ({
  title,
  items,
  currentMonth,
  currentYear,
  handleMonthSelection,
  handleYearSelection,
}: {
  title: string;
  items: [string[], number[]];
  currentMonth: string;
  currentYear: number;
  handleMonthSelection: CallableFunction;
  handleYearSelection: CallableFunction;
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
    <div ref={dropdown} className={`${styles.container} ${isActive && styles.activeContainer}`}>
      <button className={styles.button} onClick={handleToggle}>
        <h1>{title}</h1>
      </button>
      <div className={isActive ? `${styles.dropdown}` : `${styles.hide}`}>
        <div className={styles.dropdownSection}>
          {items[0].map((item, index) => {
            return (
              <button
                className={`${styles.button} ${item === currentMonth && styles.selected}`}
                key={item}
                onClick={() => handleMonthSelection(index)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className={styles.dropdownSection}>
          {items[1].map((item) => {
            return (
              <button className={`${styles.button} ${item === currentYear && styles.selected}`} key={item} onClick={() => handleYearSelection(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TwoColumnDropdown;
