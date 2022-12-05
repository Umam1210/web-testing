import React, { useState } from 'react';
import Detail from '../../components/admin/detailAdmin';
import Table from '../../components/admin/tableAdmin';
import Tabs from '../../components/admin/tabsAdmin';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { CalendarDaysIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';

export default function ListTransactionAdmin() {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <>
      <div className="col-span-8">
        <div className="relative block w-56">
          <CalendarDaysIcon className="t-0 absolute mt-1.5 ml-4 h-6 w-6 text-slate-400" />
          <input
            className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-14 pr-3 text-sm shadow-sm placeholder:text-xs placeholder:font-medium placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder={`${dayjs(date[0].startDate).format('DD/MM/YYYY')} - ${dayjs(
              date[0].endDate
            ).format('DD/MM-/YYYY')}`}
            type="text"
            name="search"
            readOnly="readonly"
            onClick={() => setOpenDate(!openDate)}
          />
        </div>
        {openDate && (
          // <DateRange
          //   editableDateInputs={true}
          //   onChange={(item) => setDate([item.selection])}
          //   moveRangeOnFirstSelection={false}
          //   ranges={date}
          //   className="relative mt-2"
          // />
          <DateRangePicker
            onChange={(item) => setDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={date}
            direction="horizontal"
            preventSnapRefocus={true}
            calendarFocus="backwards"
            className="absolute mt-2 z-10 mb-2"
          />
        )}
        <Tabs />
        <Table />
      </div>
      <div className="sticky top-24 col-span-4 h-fit">
        <Detail />
      </div>
    </>
  );
}
