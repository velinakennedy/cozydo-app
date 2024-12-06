import dayjs from "dayjs";

const getFullMonth = (month: number, year: number): Date[][] => {
  const firstDay = dayjs(new Date(year, month, 1)).day();
  const daysBeforeFirst = 1 - firstDay;
  const calendarMonth: Date[][] = Array(5);

  let count = daysBeforeFirst;

  const numberOfWeeks = () => {
    const numberOfDays = dayjs(new Date(year, month)).daysInMonth();
    switch (numberOfDays) {
      case 28:
        if (firstDay === 0) {
          return 4;
        }
        return 5;
      case 30:
        if (firstDay === 6) {
          return 6;
        }
        return 5;
      case 31:
        if (firstDay > 4) {
          return 6;
        }
        return 5;
      default:
        return 5;
    }
  };

  for (let i = 0; i < numberOfWeeks(); i++) {
    const week: Date[] = Array(7);
    for (let j = 0; j < 7; j++) {
      week[j] = new Date(year, month, count);
      count++;
    }
    calendarMonth[i] = week;
  }

  return calendarMonth;
};

export default getFullMonth;
