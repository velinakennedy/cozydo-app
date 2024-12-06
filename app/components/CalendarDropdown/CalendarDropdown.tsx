"use client";
import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import TwoColumnDropdown from "@/app/common/TwoColumnDropdown/TwoColumnDropdown";
import { months } from "@/app/utils/Calendar/names";
import dayjs from "dayjs";

const CalendarDropdown = () => {
  const month = useSelector((state: RootState) => state.calendar.month);
  const year = useSelector((state: RootState) => state.calendar.year);

  const composeYearOptions = () => {
    const yearOptions = [];

    for (let i = -10; i <= 10; i++) {
      yearOptions.push(dayjs().year() + i);
    }

    return yearOptions;
  };

  return (
    <div>
      <TwoColumnDropdown title={`${months[month]} ${year}`} items={[months, composeYearOptions()]} />
    </div>
  );
};
export default CalendarDropdown;
