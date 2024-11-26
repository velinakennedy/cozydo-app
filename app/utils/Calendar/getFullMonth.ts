import dayjs from "dayjs";

const getFullMonth = (month: number, year: number): Date[][] => {
  const firstDay = dayjs(new Date(year, month, 1)).day();
  const daysBeforeFirst = 1 - firstDay;
  const calendarMonth: Date[][] = Array(5);

  let count = daysBeforeFirst;

  for (let i = 0; i < 5; i++) {
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
