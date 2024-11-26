"use client";
import getFullMonth from "@/app/utils/Calendar/getFullMonth";
import { weekDays } from "@/app/utils/Calendar/names";
import CalendarDropdown from "../CalendarDropdown/CalendarDropdown";
import styles from "./MonthCalendar.module.css";
import { useState } from "react";
import dayjs from "dayjs";

const MonthCalendar = () => {
  const [fullMonth, setFullMonth] = useState<Date[][]>(getFullMonth(dayjs().month(), dayjs().year()));

  const handleSelection = (month: number, year: number) => {
    setFullMonth(getFullMonth(month, year));
  };
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <CalendarDropdown handleSelection={handleSelection} />
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
