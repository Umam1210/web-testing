import {
  StarIcon
} from '@heroicons/react/20/solid';
import React from 'react';
import Avatar from 'react-avatar';
export const Leftbar = () => {
  const testFavorite = ['UnivIndonesia', 'genshin_impact'];

  const testCommunity = [
    'Buat Komunitas Baru',
    'UnivIndonesia',
    'marketing',
    'ngajarngajar',
    'AAIS4',
    'jakmaaaaaania',
    'MEMES',
    'politik',
    'bisnis',
    'cuan',
    'ngapainya',
    'genshin_impact'
  ];

  const testFeed = ['Awal', 'Lagi Rame', 'Semua', 'Panas!'];

  return (
    <div className='w-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
    {/* // <div className="flex flex-col border border-gray-300 bg-white p-6"> */}
    <div className="flex flex-col gap-1 mb-2">
      <p className="text-gray-400">Favorit</p>
      {testFavorite.map((data) => {
        return (
          <div key={data} className="flex mt-2 flex-row items-center justify-between text-sm text-gray-600">
            <div className="flex gap-2">
            <Avatar name={data} size={24} round={true} />
            <div>{data}</div>
            </div>
            <StarIcon color='#6366f1' className="h-4 w-4" />
          </div>
        );
      })}
    </div>
    <div className="flex flex-col gap-1 mb-2">
      <p className="text-gray-400">Komunitas Kamu</p>
      {testCommunity.map((data) => {
        return (
          <div key={data} className="flex mt-2 flex-row items-center justify-between text-sm text-gray-600">
            <div className="flex gap-2">
            <Avatar name={data} size={24} round={true} />
            <div>{data}</div>
            </div>
            <StarIcon color='#6366f1' className="h-4 w-4" />
          </div>
        );
      })}
    </div>
    <div className="flex flex-col gap-1">
      <p className="text-gray-400">Feed</p>
      {testFeed.map((data) => {
        return (
          <div key={data} className="flex mt-2 flex-row items-center justify-between text-sm text-gray-600">
            <div className="flex gap-2">
            <Avatar name={data} size={24} round={true} />
            <div>{data}</div>
            </div>
            <StarIcon color='#6366f1' className="h-4 w-4" />
          </div>
        );
      })}
    </div>
  </div>
  );
};

// export default Leftbar;