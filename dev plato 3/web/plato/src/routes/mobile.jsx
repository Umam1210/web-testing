import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MobileView } from 'react-device-detect';
import MobileBan from '../pages/misc/MobileBan';

const MobileRoutes = () => {
  // In here, create a router that specify available routes based on user role.
  // For example, if user is a student, then only show student routes.
  // If user is a teacher, then only show teacher routes.

  return (
    <MobileView>
      <Routes>
        <Route path="*" element={<MobileBan />} />
      </Routes>
    </MobileView>
  );
};

export default MobileRoutes;
