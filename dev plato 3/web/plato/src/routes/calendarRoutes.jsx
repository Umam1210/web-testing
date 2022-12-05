import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import CalendarHeader from '../components/calendar/calendarHeader';
// import Calendar from '../pages/calendar/Calendar';
// import CalendarWeek from '../pages/calendar/CalendarWeek';
// import CalendarDay from '../pages/calendar/CalendarDay';

const CalendarDay = lazy(() => import('../pages/calendar/CalendarDay'));
const CalendarWeek = lazy(() => import('../pages/calendar/CalendarWeek'));
const Calendar = lazy(() => import('../pages/calendar/Calendar'));
const CalendarHeader = lazy(() => import('../components/calendar/calendarHeader'));

const CalendarRoutes = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route element={<CalendarHeader />}>
          <Route index element={<Calendar />} />
          <Route exact path="week" element={<CalendarWeek />} />
          <Route exact path="day" element={<CalendarDay />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default CalendarRoutes;
