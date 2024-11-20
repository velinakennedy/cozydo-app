import getFullMonth from "@/app/utils/Calendar/getFullMonth";
import { months, weekDays } from "@/app/utils/Calendar/names";
import styles from "./MonthCalendar.module.css";

const MonthCalendar = () => {
  const month: number = 11;
  const year: number = 2024;
  const fullMonth = getFullMonth(month, year);
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div>
          <h1>{months[month]}</h1>
        </div>
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
          {fullMonth.map((week, index) => {
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
