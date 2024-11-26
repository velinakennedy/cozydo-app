"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import getFullMonth from "@/app/utils/Calendar/getFullMonth";
import { weekDays } from "@/app/utils/Calendar/names";
import CalendarDropdown from "../CalendarDropdown/CalendarDropdown";
import dayjs from "dayjs";
import styles from "./MonthCalendar.module.css";

const MonthCalendar = () => {
  const [fullMonth, setFullMonth] = useState<Date[][]>(getFullMonth(dayjs().month(), dayjs().year()));
  const month = useSelector((state: RootState) => state.calendar.month);
  const year = useSelector((state: RootState) => state.calendar.year);

  const handleSelection = () => {
    setFullMonth(getFullMonth(month, year));
  };

  useEffect(() => {
    handleSelection();
  }, [month, year]);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <CalendarDropdown />
        <div className={styles.dayNameContainer}>
          {weekDays.map((day) => {
            return (
              <p className={styles.dayName} key={day}>
                {day}
              </p>
            );
          })}
        </div>
        <div className={styles.calendar}>
          {fullMonth.map((week: Date[], index: number) => {
            return (
              <div className={styles.week} key={index}>
                {week.map((day: Date, index: number) => {
                  return (
                    <div className={styles.day} key={index}>
                      <p className={styles.dayNum}>{day.getDate()}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MonthCalendar;
