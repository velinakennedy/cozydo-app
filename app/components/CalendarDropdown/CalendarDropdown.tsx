"use client";
import TwoColumnDropdown from "@/app/common/TwoColumnDropdown/TwoColumnDropdown";
import { months } from "@/app/utils/Calendar/names";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const CalendarDropdown = ({ handleSelection }: { handleSelection: CallableFunction }) => {
  const [currentMonth, setCurrentMonth] = useState<number>(dayjs().month());
  const [currentYear, setCurrentYear] = useState<number>(dayjs().year());

  const composeYearOptions = () => {
    const yearOptions = [];

    for (let i = -10; i <= 10; i++) {
      yearOptions.push(dayjs().year() + i);
    }

    return yearOptions;
  };

  useEffect(() => {}, [currentMonth, currentYear]);

  const handleMonthSelection = (month: number) => {
    setCurrentMonth(month);
  };

  const handleYearSelection = (year: number) => {
    setCurrentYear(year);
  };

  useEffect(() => {
    handleSelection(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  return (
    <div>
      <TwoColumnDropdown
        title={`${months[currentMonth]} ${currentYear}`}
        items={[months, composeYearOptions()]}
        handleMonthSelection={handleMonthSelection}
        handleYearSelection={handleYearSelection}
        currentMonth={months[currentMonth]}
        currentYear={currentYear}
      />
    </div>
  );
};
export default CalendarDropdown;
