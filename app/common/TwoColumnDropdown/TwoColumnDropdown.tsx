"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TwoColumnDropdown.module.css";
import { updateMonth, updateYear } from "@/app/redux/features/calendarSlice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { months } from "@/app/utils/Calendar/names";

const TwoColumnDropdown = ({ title, items }: { title: string; items: [string[], number[]] }) => {
  const month = useSelector((state: RootState) => state.calendar.month);
  const year = useSelector((state: RootState) => state.calendar.year);
  const dispatch = useDispatch();
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
                className={`${styles.button} ${item === months[month] && styles.selected}`}
                key={item}
                onClick={() => dispatch(updateMonth(index))}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className={styles.dropdownSection}>
          {items[1].map((item) => {
            return (
              <button className={`${styles.button} ${item === year && styles.selected}`} key={item} onClick={() => dispatch(updateYear(item))}>
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
