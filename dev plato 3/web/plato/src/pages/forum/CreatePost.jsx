import React from 'react';
import { useState } from 'react';
import { Leftbar } from '../../components/forum/detailPost/Leftbar';
import RightBarPost from '../../components/forum/detailPost/RightBarPost';
import Dropdown2 from '../../components/forum/molecules/Dropdown2';
import HeaderCreate from '../../components/forum/molecules/HeaderCreate';
import StackList from '../../components/forum/molecules/StackList';
import Tabs from '../../components/forum/TabBar';


const CreatePost = () => {
  return (
    <>
      <div className="col-span-3 max-w-xs">
        {/* <StackList/> */}
        <Leftbar />
      </div>
      <div className="col-span-6 max-w-3xl">
          <HeaderCreate />
          <Dropdown2 />
          <Tabs />
      </div>
      <div className="col-span-3 max-w-xs">
      <RightBarPost />
      </div>
    </>
  );
};

export default CreatePost;
