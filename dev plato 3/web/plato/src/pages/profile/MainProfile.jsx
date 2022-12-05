import React from 'react';
import ProfileLeftBar from '../../components/profile/ProfileLeftBar';
import ProfileTab from '../../components/profile/ProfileTab';

const MainProfile = () => {
  return (
    <>
      <div className="col-span-8">
        <ProfileTab />
      </div>
      <div className="sticky top-24 col-span-4 h-fit">
        <ProfileLeftBar />
      </div>
    </>
  );
};

export default MainProfile;
